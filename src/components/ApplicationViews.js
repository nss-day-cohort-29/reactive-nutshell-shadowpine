import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import TasksBoard from "./tasks/TasksBoard";
//import ArticlesBoard from "./articles/ArticlesBoard";
//import ConnectionsBoard from "./connections/ConnectionsBoard";
//import EventsBoard from "./events/EventsBoard";
import TasksManager from "../modules/TasksManager";
import ArticlesManager from "../modules/ArticlesManager";
//import ConnectionsManager from "../modules/ConnectionsManager";
import MessagesManager from "../modules/MessagesManager";
import EventsManager from "../modules/EventsManager";
import TasksForm from "./tasks/TasksForm";
// import ArticlesForm from "./tasks/ArticlesForm";
// import ConnectionsForm from "./tasks/ConnectionsForm";
// import EventsForm from "./tasks/EventsForm";


export default class ApplicationViews extends Component {

  state = {
    articles: [],
    messages: [],
    connections: [],
    events: [],
    tasks: []
  };

  deleteTask = id => {
    return fetch(`http://localhost:5002/tasks/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/tasks`))
      .then(response => response.json())
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );
  };

  addTask = task =>
  TasksManager.post(task)
    .then(() => TasksManager.getAll())
    .then(tasks =>
      this.setState({
        tasks: tasks
      })
    );


    componentDidMount() {

      TasksManager.getAll().then(allTasks => {
        this.setState({
          tasks: allTasks
        });
      });

      // ArticlesManager.getAll().then(allArticles => {
      //   this.setState({
      //     articles: allArticles
      //   });
      // });

      // MessagesManager.getAll().then(allMessages => {
      //   this.setState({
      //     messages: allMessages
      //   });
      // });

      // EventsManager.getAll().then(allEvents => {
      //   this.setState({
      //     events: allEvents
      //   });
      // });
    }




  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return (
              <TasksBoard
                {...props}
                deleteTask={this.deleteTask}
                tasks={this.state.tasks}
              />
            );
          }}
        />
        <Route
          path="/tasks/new"
          render={props => {
            return (
              <TasksForm
                {...props}
                addTask={this.addTask}
              />
            );
          }}
        />

      </React.Fragment>
    );
  }
}
