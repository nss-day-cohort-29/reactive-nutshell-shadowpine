import React, { Component } from "react";
import EditEventForm from "./EditEventForm"

export default class EventsCard extends Component {
    state = {
        editClicked: false
    }

    handleChange = () => {
        this.setState(state => ({editClicked: !state.editClicked}));
    };

    buttonState = () => {
        if(this.state.editClicked){
            return(
                <EditEventForm handleChange={this.handleChange} eventId={this.props.event.id} event={this.props.event} editEvent={this.props.editEvent} />
            )
        } else{
            return (
                <React.Fragment>
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.event.title}
                        </h4>
                        <p>{this.props.event.eventDate}<br />{this.props.event.location}</p>
                        <button type="button" className={`event--${this.props.event.id} btn btn-warning`} onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button><button id={this.props.event.id} className="btn btn-info" onClick={this.handleChange}>Edit Event</button>
                    </div>
                    <div className="card-body">
                        <h5>Posted by {this.props.event.user.userName}</h5>
                        <p>{this.props.event.postDate}</p>

                    </div>
                </React.Fragment>
            )}

    }

    render(){
        return (
            <div key={this.props.event.id} className="card">
                {this.buttonState()}

            </div>
    )}
}