// Author: Cole Bryant. Purpose: Renders the modal which enables the user to add the userName clicked as a friend

import React, { Component } from "react";
import "./Messages.css";

export default class MessagesConnection extends Component {

    handleYesButton = event => {
        console.log("pressed");
        event.preventDefault();

        const newObject = {
            userId: this.props.message.userId,
            currentUserId: Number(sessionStorage.getItem("userId"))
        }
        this.props.postNewConnection(newObject);
        this.props.toggleFriendModal();
    }

    render() {
        return (
            <section className="friendAddModal">
                <h1>Would you like to add {this.props.userName} as a friend?</h1>
                <button onClick={this.handleYesButton}>Yes</button>
                <button onClick={this.props.toggleFriendModal}>No</button>
            </section>
        )
    }
}