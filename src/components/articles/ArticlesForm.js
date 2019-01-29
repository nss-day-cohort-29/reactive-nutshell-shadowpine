import React, { Component } from "react";

export default class ArticlesForm extends Component {
    state = {
        hideForm: false
    };

    handleChange = () => {
        this.setState= ({hideForm: true});
    }

    render() {
      return (
        <React.Fragment>
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
        </React.Fragment>
      )}
}