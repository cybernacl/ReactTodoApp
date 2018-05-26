import React, { Component } from 'react';
import TaskItem from './TaskItem';
import shortId from 'shortid'; // SHA1 

export default class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  addTask(task) {
    const newKey = shortId.generate();
    this.setState((prevState) => ({ 
      list: [...prevState.list, <TaskItem key={newKey} id={newKey} content={task} />]
    }));
  }

  delTask(index) {
    console.log('>> delete task ' + index);
    // TODO
  }

  render() {
    return <ul>{this.state.list}</ul>;
  }
}
