import React, { Component } from "react";
import { Link } from "react-router-dom";
import TasksCard from "./TasksCard";

export default class TasksBoard extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="tasks">
          {this.props.tasks.map(task => (
            <TasksCard key={task.id} task={task} {...this.props} />
          ))}
        </section>
        <div className="taskButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/tasks/new");
            }}
          >
            Create New Task
          </button>
        </div>

      </React.Fragment>
    );
  }
}