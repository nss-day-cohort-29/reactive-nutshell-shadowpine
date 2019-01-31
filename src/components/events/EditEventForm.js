import React, { Component } from "react";

export default class EditEventForm extends Component {
    state = {
        title: "",
        eventDate: "",
        location: "",
    }

    handleInput = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }


    updateEvent = () => {
        this.props.handleChange()
        let updatedEvent = {
            userId: this.props.event.user.id,
            title: this.state.title,
            eventDate: this.state.eventDate,
            date: this.props.event.date,
            location: this.state.location,
            postDate: this.props.event.postDate
        }

        this.props.editEvent(this.props.eventId, updatedEvent)
    }

    render() {
        return (
            <React.Fragment>
                <label>
                    Title:
                    <input id="title" onChange={this.handleInput}/>
                </label>
                <label>
                    Location:
                    <input id="location" onChange={this.handleInput}/>
                </label>
                <label>
                    Date:
                    <input type="datetime-local" id="eventDate" onChange={this.handleInput}/>
                </label>
                <button onClick={this.updateEvent}>Submit</button>
            </React.Fragment>
        )
    }
}