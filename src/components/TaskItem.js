import React, { Component } from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: shortId.generate(),
      name: props.name,
      completed: false,
      startDate: Date.now(),
      endDate: 0
    };
  }

  render() {
    const { name, startDate } = this.state;
    return (
      <li>
        <span>{name} - {startDate}</span>
        <button className="task-edit">EDIT</button>
        <button className="task-del">DEL</button>
      </li>
    );
  }
}

TaskItem.propTypes = {
  name: PropTypes.string.isRequired
};
