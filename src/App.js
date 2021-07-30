import React, { Component } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import axios from 'axios';
// import TestForm from './components/TestForm';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: '',
      todos: [],
    };
  }

  removeTodo = (id) => {
    axios
      .delete(`http://localhost:8000/todos/${id}`)
      .then((response) => {
        let updatedTodos = this.state.todos.filter((todo) => {
          return id !== todo.id;
        });

        this.setState({ todos: updatedTodos });
        return response;
      })
      .catch((error) => console.log(error));
  };

  fetchData = () => {
    axios
      .get('http://localhost:8000/todos')
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch((error) => console.log(error));
  };

  saveData = (data) => {
    axios
      .post('http://localhost:8000/todos', data)
      .then((response) => {
        this.setState({ newTodo: '' });
        let newTodos = [response.data, ...this.state.todos];
        this.setState({ todos: newTodos });
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.newTodo === '') {
      return;
    }

    let data = { title: this.state.newTodo, done: false };

    this.saveData(data);
  };

  toggleTodoDone = (id) => {
    let todo = this.state.todos.find((todo) => todo.id === id);

    let data = { done: !todo.done };

    axios
      .patch(`http://localhost:8000/todos/${id}`, data)
      .then((respone) => console.log(respone))
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className='App container pt-4'>
        <Header />

        <TodoForm
          newTodo={this.state.newTodo}
          handleChange={this.handleChange}
          onAdd={this.onAdd}
          handleSubmit={this.handleSubmit}
        />

        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
