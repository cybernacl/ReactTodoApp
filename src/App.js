import React, { Component } from 'react';
import './App.css';

import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.taskList.addTask(task);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO App {`Ver${this.props.version}`}</h1>
        </header>
        <section>
          <InputTask onNewTask={this.addTask} />
          <TaskList ref={(e) => this.taskList = e} />
        </section>
      </div>
    );
  }
}

export default App;
