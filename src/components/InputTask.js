import React from 'react';
import PropTypes from 'prop-types';

export default class InputTask extends React.Component {
  constructor(props) {
    super(props);
    this.fireEventNewTask = this.fireEventNewTask.bind(this);
    this.inputText = this.inputText.bind(this);
    this.state = { value: '' };
  }

  fireEventNewTask() {
    const onNewTask = this.props.onNewTask;
    if (onNewTask) {
      onNewTask(this.state.value);
      this.setState({ value: '' });
    }
  }

  inputText(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" id="new-task" onChange={this.inputText} value={this.state.value} />
        <button id="add-task" onClick={this.fireEventNewTask}>ADD</button>
      </div>
    );
  }
};

InputTask.propTypes = {
  onNewTask: PropTypes.func
};

InputTask.defaultProps = {
  onNewTask: () => console.error("You don't have a event handler.")
};
