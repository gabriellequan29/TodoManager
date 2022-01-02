import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/todo/TodoApp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp></TodoApp>
      </div>
    );
  }
}

export default App;
