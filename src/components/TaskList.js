import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  addTask(task) {
    this.state.list.push(task); // mutable!!
    return this.state.list.indexOf(task);
  }

  delTask(index) {
    console.log('>> delete task ' + index);
  }

  render() {
    return (
      <ul></ul>
    );
  }
}
