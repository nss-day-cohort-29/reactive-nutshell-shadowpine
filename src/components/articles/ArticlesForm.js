import React, { Component } from "react";

export default class ArticlesForm extends Component {
    state={
        showForm: true
    }

    handleSubmitChange = () => {
        this.setState({showForm: false})
    }

    submitForm() {
        if(this.props.showForm === false){
            return (
                <button
                    className="article--new"
                    onClick={this.props.handleChange}>
                    Add Article
                </button>
            )
        } else {
          return (<React.Fragment>
            <label>
                Title
                <input />
            </label>
            <label>
                Synopsis
                <textarea></textarea>
            </label>
            <label>
                URL
                <input />
            </label>
            <button onClick={this.state.handleSubmitChange}>Submit</button>
        </React.Fragment>)
        }
    }

    render() {
      return this.submitForm()
    }
}