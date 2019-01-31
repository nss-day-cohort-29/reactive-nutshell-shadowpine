// Author: Cole Bryant. Purpose: This component renders the edit form for each of the message cards in addition to calling the put
// fetch function to edit the content of messages

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
        this.props.handleSaveButton(messageObj, event);
    }

    componentDidMount() {
        this.setState({
            editedContent: this.props.message.content
        })
    }
    render() {
        return (
            <form className="messagesContainer__messageEdit" id={`messageEdit__${this.props.message.id}`}>
                <input type="text" onChange={this.handlefieldChange} defaultValue={this.props.message.content}/>
                <button type="button" onClick={this.createEditObject}>Save</button>
            </form>
        )
    }
}