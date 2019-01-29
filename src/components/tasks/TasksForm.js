
import React, { Component } from "react";


export default class TasksForm extends Component {

  state = {
    tasksTitle: "",
    details: "",
  };


  handleFieldChange = evt => {
    const stateToChange = {};
    console.log(evt.target.id, evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewTask = evt => {
    evt.preventDefault();
    if (this.state.details === "") {
      window.alert("Please include some details");
    } else {
      const task = {
        tasksTitle: this.state.tasks,
        details: this.state.details,
      }
      this.props
        .addTasks(task)
        .then(() => this.props.history.push("/tasks"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="tasksForm">
          <div className="form-group">
            <label htmlFor="taskName">Task Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="taskName"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="details"> Details </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="taskDetails"
              placeholder="Details"
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