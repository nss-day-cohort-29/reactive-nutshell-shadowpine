import React, { Component } from "react";
import "./Messages.css";

export default class MessagesForm extends Component {
    state = {
        editedContent: ""
    }

    handlefieldChange = event => {
        const stateToChange = {};
        stateToChange.editedContent = event.target.value;
        this.setState(stateToChange);
    }

    createEditObject = event => {
        const messageObj = {
            id: this.props.message.id,
            content: this.state.editedContent,
            userId: this.props.message.userId,
            timeStamp: this.props.message.timeStamp,
            readableTime: this.props.message.readableTime
        };
        console.log(messageObj);
        this.props.handleSaveButton(messageObj, event);
    }


    render() {
        return (
            <form className="messagesContainer__messageEdit" id={`messageEdit__${this.props.message.id}`}>
                <label />
                <input type="text" onChange={this.handlefieldChange} value={this.props.message.content} />
                <button onClick={this.createEditObject}>Save</button>
            </form>
        )
    }
}