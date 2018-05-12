import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <span>
          <s>{`${name} - ${startDate}`}</s>
        </span>
        <button className="task-edit">EDIT</button>
        <button className="task-del">DEL</button>
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
