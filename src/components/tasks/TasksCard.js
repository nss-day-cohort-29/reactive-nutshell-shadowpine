/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class TasksCard extends Component {
  render() {
    return (
      <div key={this.props.task.id} className="card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.task.title}
            <Link className="nav-link" to={`/tasks/${this.props.task.id}`}>
              Details
            </Link>
            <a
              href="#"
              onClick={() => this.props.deleteTask(this.props.task.id)}
              className="card-link"
            >
              Remove Task
            </a>
          </h5>
        </div>
      </div>
    );
  }
}