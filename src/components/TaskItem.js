import React, { Component } from "react";
import PropTypes from "prop-types";

const date = millis => new Date(millis).toDateString();

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      completed: false,
      startDate: Date.now(),
      endDate: 0 // number
    };
  }

  render() {
    const { name, startDate } = this.state;
    return (
      <li>
        {name}
        <span className="Task-date">{date(startDate)}</span>
        <button className="Task-edit">EDIT</button>
        <button className="Task-del">DEL</button>
      </li>
    );
  }
}

TaskItem.propTypes = {
  name: PropTypes.string
};

TaskItem.defaultProps = {
  name: ""
};
