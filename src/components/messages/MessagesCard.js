// Author: Cole Bryant. Purpose: This component renders each of the message "cards" conditionally. If the user who posted the message
// is the current user, this component also adds functionality for the edit and delete buttons. Finally, this component also
// routes to the MessagesEdit component once the edit button is pressed or MessagesConnection when a userName for a user who is not
// already a friend is clicked

import React, { Component } from "react";
import MessagesEdit from "./MessagesEdit";
import MessagesConnection from "./MessagesConnection";
import "./Messages.css";

export default class MessagesCard extends Component {

    state = {
        showEditForm: false,
        toggleModal: false
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

    testValidConnection = () => {
        let validConnections = this.props.connections.filter(connection => connection.currentUserId === Number(sessionStorage.getItem("userId")));
        let booleanValue = false;
        if (validConnections) {
            validConnections.forEach(connection => {
                if (connection.userId === this.props.message.userId) {
                    booleanValue = true;
                    return
                }
            })
        };
        return booleanValue;
    }

    toggleFriendModal = () => {
        this.setState({
            toggleModal: !this.state.toggleModal
        })
    }

    handleAlreadyFriends = () => {
        alert(`You are already friends!`);
    }

    render() {
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
        } else if (!this.testValidConnection()) {
            return <React.Fragment>
                    <section id={`messageItem__${this.props.message.id}`} className="messagesContainer__messageItem--otherUser">
                        <h3 onClick={this.toggleFriendModal}>{userName}</h3>
                        <p>{this.props.message.content}</p>
                        <p>At {this.props.message.timeStamp}</p>
                    </section>
                    {this.state.toggleModal &&
                        <MessagesConnection {...this.props} userName={userName} toggleFriendModal={this.toggleFriendModal} />
                    }
                    </React.Fragment>
        } else {
            return <section id={`messageItem__${this.props.message.id}`} className="messagesContainer__messageItem--otherUser">
                <h3 onClick={this.handleAlreadyFriends}>{userName}</h3>
                <p>{this.props.message.content}</p>
                <p>At {this.props.message.timeStamp}</p>
            </section>
        }
    }
}