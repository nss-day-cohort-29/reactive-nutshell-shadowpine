// this file provides the structure for the article form and handles the input
// Author: Brittany Ramos-Janeway

import React, { Component } from "react";


export default class ArticlesForm extends Component {
    // set initial state for the form component
    state = {
        userId: "",
        url: "",
        title: "",
        synopsis: "",
        timestamp: "",
        date: ""
    }

    // update state whenever the input is edited
    handleInput = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    constructNewArticle = (evt) => {
        evt.preventDefault();

        // set up timestamp and readable hour for posts
        let timestamp = new Date();
        let date = timestamp.toLocaleString();

        // create object that will POST to database with current inputs
        const article = {
            userId: 1,
            url: this.state.url,
            title: this.state.title,
            synopsis: this.state.synopsis,
            timestamp: timestamp,
            date: date

        };
        this.props.addArticle(article)
            .then(() => this.props.handleChange())
    }
    render() {
        return (
        <React.Fragment>
            <label>
                Title
                <input id="title" onChange={this.handleInput}/>
            </label>
            <label>
                Synopsis
                <textarea id="synopsis" onChange={this.handleInput}></textarea>
            </label>
            <label>
                URL
                <input id="url" onChange={this.handleInput}/>
            </label>
            <button onClick={this.constructNewArticle}>Submit</button>
        </React.Fragment>
        )}
}