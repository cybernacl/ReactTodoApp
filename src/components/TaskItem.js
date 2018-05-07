import React, { Component } from 'react';


export default class TaskItem extends Component {
  constructor() {
    super();
    this.state = {    // task
      name: '',
      completed: false,
      start_date : 0, // number
      end_date: 0     // number
    };
  }
  render() {
    // let {name, start_date} = this.state;
    return (
      <li>
        <span>{`${this.state.name} - ${this.state.start_date}`}</span>
        <button className="task-edit">EDIT</button>
        <button className="task-del">DEL</button>
      </li>
    );
  }
};