import React, { Component } from "react";


export default class ArticlesForm extends Component {
    // set initial state for the form component
    state = {
        userId: "",
        url: "",
        title: "",
        synopsis: ""
    }

    // update state whenever the input is edited
    handleInput = (evt) => {
        const stateToChange = {};
        console.log(evt.target.id)
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    constructNewArticle = (evt) => {
        evt.preventDefault();
        const article = {
            userId: 2,
            url: this.state.url,
            title: this.state.title,
            synopsis: this.state.synopsis
        };
        this.props.addArticle(article)
            .then(() => this.props.handleChange())
    }
    render() {
        console.log(this.state)
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