import React, { Component } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import './App.css';
import TestForm from './components/TestForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div className='App container pt-4'>
        <Header />

        {/* <TodoForm /> */}
        <TestForm />
      </div>
    );
  }
}

export default App;
