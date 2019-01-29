import React, { Component } from "react";
import "./Messages.css";

export default class MessagesForm extends Component {
    state = {
        newMessage: ""
    }

    handlefieldChange = event => {
        const stateToChange = {};
        stateToChange.newMessage = event.target.value;
        this.setState(stateToChange);
    }

    handleEnterPress = event => {
        if (event.charCode === 13) {
            this.addMessageObject(event);
        }
    }

    addMessageObject = event => {
        event.preventDefault();

        const newObject = {
            content: this.state.newMessage,
            userId: 1,
            timeStamp: ""
        }
        this.props.postNewMessage(newObject);
    }
    render() {
        return(
            <form className="messageForm">
                <input type="text"
                id="messageInput"
                className="messageForm__input"
                onChange={this.handlefieldChange}
                onKeyPress={this.handleEnterPress} />
            </form>
        )
    }
}