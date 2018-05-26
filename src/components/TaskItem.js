import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.state = {
      id: props.id,
      content: props.content,
      completed: false,
      startDate: Date.now(), // millis
      endDate: 0
    };
  }

  toggleStatus(e) {
    this.setState((prevState) => {
      const newCompleted = !prevState.completed;
      return { ...prevState, completed: newCompleted };
    })
  }

  render() {
    const { content, startDate } = this.state;
    return (
      <li>
        <span onClick={this.toggleStatus}
          className={this.state.completed ? "completed": ""}>
          {content} - {startDate}
        </span>
        <button className="task-edit">EDIT</button>
        <button className="task-del">DEL</button>
      </li>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

