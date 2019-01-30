/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import TasksForm from "./TasksForm";



export default class TasksCard extends Component {

  // state = {
  //   complete: this.props.complete
  // }
handleCheckChange = e => {
  e.preventDefault();
  const completeCheck = {
    complete: !this.props.task.complete
  };
 console.log("fuck", completeCheck)
 this.props
 .addCheckChange(completeCheck, this.props.task.id)
//  .then(() => this.props.history.push("/tasks"));
}


  render() {
    console.log(this.props)
    return (
      <div key={this.props.task.id} className="card">
        <div className="card-body">
          <h4 className="card-title">
            {console.log(this.props)}
            {this.props.task.tasksTitle}</h4>
            <h5> Estimated Completion Date </h5>
              <h5 className="card-details">
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
            <form>
        <label>
          Completed
          <input
            className="btn btn-primary"
            name="completed"
            type="checkbox"
            checked={this.props.task.complete}
            onChange={this.handleCheckChange} />
            {console.log(this.props)}
        </label>
      </form>
          </h5>
        </div>
      </div>
    );
  }
}