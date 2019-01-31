// Author: Cole Bryant. Purpose: This component renders each of the message "cards" conditionally. If the user who posted the message
// is the current user, this component also adds functionality for the edit and delete buttons. Finally, this component also
// routes to the MessagesEdit component once the edit button is pressed

import React, { Component } from "react";
import MessagesEdit from "./MessagesEdit";
import "./Messages.css";

export default class MessagesCard extends Component {

    state = {
        showEditForm: false
    }

    handleDeleteButton = event => {
        const idToDelete = event.target.parentNode.id.split("__")[1];
        this.props.deleteMessage(idToDelete);
    }

    handleEditButton = () => {
        this.setState({
            showEditForm: true
        });
    }

    handleSaveButton = (messageObj, event) => {
        this.setState({
            showEditForm: false
        });
        const idToEdit = event.target.parentNode.id.split("__")[1];
        this.props.editMessage(messageObj, idToEdit);
    }

    render() {
        // let validConnections = this.props.connections.filter(connection => connection.currentUserId === Number(sessionStorage.getItem("userId")));
        let userObj = this.props.users.find(user => user.id === this.props.message.userId);
        let userName = userObj ? userObj.userName : "";
        if (this.props.message.userId === Number(sessionStorage.getItem("userId")) && this.state.showEditForm) {
            return <MessagesEdit {...this.props} handleSaveButton={this.handleSaveButton} />
        } else if (this.props.message.userId === Number(sessionStorage.getItem("userId"))) {
            return <section id={`messageItem__${this.props.message.id}`} className="messagesContainer__messageItem--currentUser">
                <h3>{userName}</h3>
                <p>{this.props.message.content}</p>
                <p>At {this.props.message.timeStamp}</p>
                <button onClick={this.handleDeleteButton}>Delete</button>
                <button onClick={this.handleEditButton}>Edit</button>
            </section>
        } else {
            return <section id={`messageItem__${this.props.message.id}`} className="messagesContainer__messageItem--otherUser">
                <h3>{userName}</h3>
                <p>{this.props.message.content}</p>
                <p>At {this.props.message.timeStamp}</p>
            </section>
        }
    }

}