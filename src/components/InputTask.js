import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputTask extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.commingText = this.commingText.bind(this);
    this.fireEventNewTask = this.fireEventNewTask.bind(this);
  }

  commingText(event) {
    this.setState({ text: event.target.value });
  }

  fireEventNewTask() {
    const { onNewTask } = this.props;
    if (onNewTask) {
      onNewTask(this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="new-task"
          onChange={this.commingText}
          value={this.state.text}
        />
        <button id="add-task" onClick={this.fireEventNewTask}>
          ADD
        </button>
      </div>
    );
  }
}

InputTask.propTypes = {
  onNewTask: PropTypes.func
};

InputTask.defaultProps = {
  onNewTask: null
};
