import React, { Component } from "react";


export default class EventsForm extends Component {
    // set initial state for the form component
    state = {
        userId: "",
        title: "",
        eventDate: "",
        date: "",
        location: "",
        postDate: ""
    }

    // update state whenever the input is edited
    handleInput = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    constructNewEvent = (evt) => {
        evt.preventDefault();
        let readableDate = this.state.eventDate

        console.log(readableDate.toLocaleString())
        debugger
        let postDate = new Date();


        // create object that will POST to database with current inputs
        const event = {
            userId: 1,
            title: this.state.title,
            location: this.state.location,
            eventDate: this.state.eventDate,
            date: readableDate,
            postDate: postDate

        };
        this.props.addEvent(event)
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
                Location
                <input id="location" onChange={this.handleInput}></input>
            </label>
            <label>
                Date
                <input type="datetime-local" id="eventDate" onChange={this.handleInput}/>
            </label>
            <button onClick={this.constructNewEvent}>Submit</button>
        </React.Fragment>
        )}
}