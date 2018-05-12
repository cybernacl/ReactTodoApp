import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  addTask(task) {
    this.setState(prevState => ({ tasks: prevState.tasks.concat(task) }));
  }

  delTask(index) {
    console.log(">> delete task", index);
  }

  render() {
    return <ul>{this.state.tasks.map(task => <TaskItem name={task} />)}</ul>;
  }
}
