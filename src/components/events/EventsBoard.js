import React, { Component } from "react";
import EventsCard from "./EventsCard";
import EventsForm from "./EventsForm"

export default class EventsBoard extends Component {
    state = {
        showForm: false
    };

    handleChange = () => {
        this.setState(state => ({showForm: !state.showForm}));
    };

    addForm = () => {
        if(this.state.showForm){
            return (
                <React.Fragment>
                    <EventsForm addEvent={this.props.addEvent} handleChange={this.handleChange} {...this.props}/>
                </React.Fragment>
            )
        } else {
            return (
                <button
                    className="event--new"
                    onClick={this.handleChange}>
                    Add Event
                </button>
            )
        }
    };

    checkUser = (sessionUserId, eventUserId) => {
        let sameUser = false;

        if(sessionUserId === eventUserId){
            sameUser = true;
        }
        return sameUser;
    };


    render(){
        let sessionUser = sessionStorage.getItem("userId");
        let sessionUserId = Number(sessionUser);
        this.props.events.sort(function(a,b){return new Date(a.timestamp) - new Date(b.timestamp)})
        return (
        <React.Fragment>
                {/* Create title, new button, and articles container */}
                <h1>Events</h1>
                {this.addForm()}
                <section className="events">
                    {/* add each event to the DOM */}
                    {this.props.events.map(event =>
                        <EventsCard key={event.id} event={event} deleteEvent={this.props.deleteEvent} editEvent={this.props.editEvent} />

                    )}
                </section>
            </React.Fragment>
        )}
}