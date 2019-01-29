
import React, { Component } from "react";


export default class TasksForm extends Component {

  state = {
    tasksTitle: "",
    expectedCompletionDate: "",
    complete: false
  };


  handleFieldChange = e => {
    const stateToChange = {};
    console.log(e.target.id, e.target.value);
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  constructNewTask = e => {
    e.preventDefault();
    if (this.state.details === "" && this.state.tasksTitle === "") {
      window.alert("You must fill out both sections.");
    } else {
      const task = {
        tasksTitle: this.state.tasksTitle,
        expectedCompletionDate: this.state.expectedCompletionDate,
        complete: this.state.complete
      };
      console.log(this.props)
      debugger
      this.props
        .addTask(task)
        .then(() => this.props.history.push("/tasks"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="tasksForm">
          <div className="form-group">
            <label htmlFor="tasksTitle">Task Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="tasksTitle"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expectedCompletionDate"> Estimated Completion Date </label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="expectedCompletionDate"
              placeholder="Expected Completion Date"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewTask}
            className="btn btn-primary"
          >
            Create New
          </button>
        </form>
      </React.Fragment>
    );
  }
}