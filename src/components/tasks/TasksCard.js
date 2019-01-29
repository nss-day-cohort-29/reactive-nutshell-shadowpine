/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import TasksForm from "./TasksForm";



export default class TasksCard extends Component {
  render() {
    return (
      <div key={this.props.task.id} className="card">
        <div className="card-body">
          <h4 className="card-title">
            {console.log(this.props)}
            {this.props.task.tasksTitle}
            <h5 className="card-details">
            {console.log(this.props)}
            {this.props.task.expectedCompletionDate}
            <Link className="nav-link" to={`/tasks/${this.props.task.id}`}>
            </Link>
            <a
              href="#"
              onClick={() => this.props.deleteTask(this.props.task.id)}
              className="card-link"
            >
              Remove Task
            </a>
            {/* <form>
        <label>
          Completed
          <input
            name="completed"
            type="checkbox"
            checked={TasksForm.props.complete}
            onChange={this.handleInputChange} />
        </label>
      </form> */}
          </h5>
          </h4>
        </div>
      </div>
    );
  }
}