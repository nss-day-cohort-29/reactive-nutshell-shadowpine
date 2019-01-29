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

        const dateTime= new Date();
        let hour = dateTime.getHours();
        let amPm = "";
        const hourify = () => {
            if (hour === 0) {
                amPm = "A.M.";
                return hour + 12;
            } else if (hour < 12) {
                amPm = "A.M.";
                return hour;
            } else if (hour === 12) {
                amPm = "P.M.";
                return hour;
            }else if (hour > 12) {
                amPm = "P.M.";
                return hour - 12;
            };
        };
        let minutify = () => {
            if (dateTime.getMinutes() < 10) {
                return `0${dateTime.getMinutes()}`;
            } else {
                return `${dateTime.getMinutes()}`
            }
        }
        let secondify = () => {
            if (dateTime.getSeconds() < 10) {
                return `0${dateTime.getSeconds()}`
            } else {
                return `${dateTime.getSeconds()}`
            }
        }

        let hourName = hourify();
        let minuteName = minutify();
        let secondName = secondify();


        let readableTime = `${hourName}:${minuteName}:${secondName} ${amPm}`


        const newObject = {
            content: this.state.newMessage,
            userId: 1,
            timeStamp: dateTime,
            readableTime: readableTime
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