import React, { Component } from "react";

export default class TasksForm extends Component {
    state = {
        tasksToEdit: ""
    }

    handlefieldChange = event => {
        const stateToChange = {};
        stateToChange.editedContent = event.target.value;
        this.setState(stateToChange);
    }

    createEditObject = event => {
        const editedTasks = {
            id: this.props.tasks.id,
            "tasksTitle":this.props.tasks.tasksTitle ,
            "expectedCompletionDate":this.props.tasks.expectedCompletionDate ,
            "complete": this.props.tasks.complete
        };
        console.log(editedTasks);
        this.props.handleSaveButton(editedTasks, event);
    }


    render() {
        render() {
            return (
              <React.Fragment>
                <form className="editTasksForm">
                  <div className="form-group">
                    <label htmlFor="editTasksTitle">Task Title</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="editTasksTitle"
                      placeholder="Edit Task Title"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editeddExpectedCompletionDate"> Estimated Completion Date </label>
                    <input
                      type="date"
                      required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="editedExpectedCompletionDate"
                      placeholder="Edit Completion Date"
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



}