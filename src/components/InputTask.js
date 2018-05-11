import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputTask extends Component {
  constructor(props) {
    super(props);
    this.inputText = "";
    this.state = { inputText: "" };
    this.commingText = this.commingText.bind(this);
    this.fireEventNewTask = this.fireEventNewTask.bind(this);
  }

  commingText(event) {
    this.inputText = event.target.value;
    this.setState({ inputText: this.inputText });
  }

  fireEventNewTask() {
    const { onNewTask } = this.props;
    if (onNewTask && this.inputText) {
      onNewTask(this.inputText);
      this.setState({ inputText: "" });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="new-task"
          onChange={this.commingText}
          value={this.state.inputText}
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
