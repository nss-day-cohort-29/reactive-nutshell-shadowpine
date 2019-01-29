import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import ArticlesBoard from "./articles/ArticlesBoard";
import MessagesBoard from "./messages/MessagesBoard";
import MessagesManager from "../modules/MessagesManager";
import ArticlesManager from "../modules/ArticlesManager";

export default class ApplicationViews extends Component {
  state = {
    users: [],
    messages: [],
    articles: [],
    tasks: [],
    events: [],
    connections: []
  }

  constructor() {
    super();
    this.state = {
      messages: []
    }
    this.postNewMessage = this.postNewMessage.bind(this);
  }

  postNewMessage(messageObj) {
    MessagesManager.post(messageObj)
    .then(() => MessagesManager.getAll()
    .then(messages => this.setState({
      messages: messages
    })));
  }

  componentDidMount() {
    MessagesManager.getAll()
      .then(messages => this.setState({
        messages: messages
      }));
    ArticlesManager.getAll()
      .then(allArticles => {
        this.setState({
          articles: allArticles
        });
      });
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return <ArticlesBoard {...props} articles={this.state.articles}/>
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
            return <MessagesBoard postNewMessage={this.postNewMessage} messages={this.state.messages} />
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
