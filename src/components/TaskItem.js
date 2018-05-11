import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      completed: false,
      startDate: 0, // number
      endDate: 0 // number
    };
  }

  render() {
    const { name, startDate } = this.state;
    return (
      <li>
        <span>
          <s>{`${name} - ${startDate}`}</s>
        </span>
        <button className="task-edit">EDIT</button>
        <button className="task-del">DEL</button>
      </li>
    );
  }
}
