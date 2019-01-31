import React, { Component } from "react";
import TasksManager from "../../modules/TasksManager";

export default class EditTasksForm extends Component {
    state = {
        editTasksTitle: "",
        editedExpectedCompletionDate: ""
    }

    //This part takes the individual changes and set state based on input.

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        //console.log(stateToChange);
        this.setState(stateToChange);
    }
    //This takes all of those little inputs them and passes them up to the app views.

    createEditObject = evt => {
        let completeObj = this.props.tasks.filter( task => {
           if (task.id === this.props.match.params.taskId)
            {
                return this.props.tasks.complete;
            }
        })

        const editedTasks = {
            tasksTitle:this.state.editTasksTitle,
            expectedCompletionDate:this.state.editedExpectedCompletionDate,
            id: this.props.match.params.taskId,
            complete: completeObj
        };
        // console.log(editedTasks);
        // console.log(this.state)
        // console.log("props", this.props)
        this.props
        .updateTasks(this.props.match.params.taskId, editedTasks)
        .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
        console.log(this.props)
       TasksManager.get(this.props.match.params.taskId)
        .then(task => {
          this.setState({
            editTasksTitle: task.tasksTitle,
            editedExpectedCompletionDate: task.expectedCompletionDate
          });
         // console.log(this.state)
        });
      }



    render() {

            return (
              <React.Fragment>
                <form className="editTasksForm">
                  <div className="form-group">
                    <label htmlFor="editTasksTitle">Edit Task Title</label>
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
                    <label htmlFor="editedExpectedCompletionDate"> Edit Estimated Completion Date </label>
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



