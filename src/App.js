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
    // let updatedTodos = this.state.todos.filter((todo) => {
    //   return id !== todo.id;
    // });
    // this.setState({ todos: updatedTodos });
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
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = { title: this.state.newTodo };

    this.saveData(data);
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

        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
