import React, { Component } from "react";

export default class ArticlesForm extends Component {

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
            <button>Submit</button>
        </React.Fragment>)
        }
    }

    render() {
      return this.submitForm()
    }
}