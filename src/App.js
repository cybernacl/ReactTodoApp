import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.addTaskToList = this.addTaskToList.bind(this);
  }

  addTaskToList(task) {
    this.taskList.addTask(task);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO App {`Ver${this.props.version}`}</h1>
        </header>
        <section className="App-body">
          <InputTask onNewTask={this.addTaskToList} />
          <TaskList
            ref={ref => {
              this.taskList = ref;
            }}
          />
        </section>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  version: PropTypes.string
};

App.defaultProps = {
  version: "0.X.0"
};
