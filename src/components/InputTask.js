import React, { Component } from 'react';

export default class InputTask extends Component {
  constructor() {
    super();
    this.fireEventNewTask = this.fireEventNewTask.bind(this);
  }
  fireEventNewTask() {  // addNewTask
    let onNewTask = this.props.onNewTask;
    if (onNewTask) {
      onNewTask(this.refs.newTask.value);
      this.refs.newTask.value = '';
    }
  }
  render() {
    return (
      <div>
        <input type="text" id="new-task" ref="newTask" />
        <button id="add-task" onClick={this.fireEventNewTask}>ADD</button>
      </div>
    );
  }
};