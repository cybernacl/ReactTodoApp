import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      // eslint-disable-next-line
      completed: false,
      startDate: 0, // number
      // eslint-disable-next-line
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
