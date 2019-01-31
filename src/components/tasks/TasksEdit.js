import React, { Component } from "react";

export default class EditTasksForm extends Component {
    state = {
        tasksToEdit: ""
    }

    //This part takes the individual changes and set state based on input.

    handlefieldChange = event => {
        const stateToChange = {};
        stateToChange.editedContent = event.target.value;
        this.setState(stateToChange);
    }
    //This takes all of those little inputs them and passes them up to the app views.

    createEditObject = event => {
        const editedTasks = {
            id: this.props.tasks.id,
            "tasksTitle":this.props.tasks.tasksTitle ,
            "expectedCompletionDate":this.props.tasks.expectedCompletionDate,
            "complete": this.props.tasks.complete
        };
        console.log(editedTasks);
        this.props.updateTasks(editedTasks, event);
    }



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
                    onClick={this.createEditObject}
                    className="btn btn-primary"
                  >
                    Resubmit
                  </button>
                </form>

              </React.Fragment>
            );
          }
        }



