import React, { Component } from 'react';

class TestForm extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: '',
      todos: [],
    };
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  // let array = []
  // array.push('c')

  // ['c']
  // array.push('d')

  // ['c', 'd']

  handleSave = (event) => {
    let tempTodos = this.state.todos;

    tempTodos.push(this.state.newTodo);

    this.setState({ todos: tempTodos });

    this.setState({ newTodo: '' });
  };

  render() {
    return (
      <div>
        <h4>Todos</h4>

        <input
          type='text'
          name='todo'
          value={this.state.newTodo}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSave}>Save</button>

        <div>
          {this.state.todos.map((todo) => {
            return <div>{todo}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default TestForm;
