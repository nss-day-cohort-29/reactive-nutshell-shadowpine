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
        console.log("save button pressed");
        const idToEdit = event.target.parentNode.id.split("__")[1];
        this.props.editMessage(messageObj, idToEdit);
    }

    render() {
        if (this.props.message.userId === Number(sessionStorage.getItem("userId")) && this.state.showEditForm) {
            return <MessagesEdit {...this.props} handleSaveButton={this.handleSaveButton} />
        } else if (this.props.message.userId === Number(sessionStorage.getItem("userId"))) {
            return <section key={this.props.message.id} id={`messageItem__${this.props.message.id}`} className="messagesContainer__messageItem">
                <p>{this.props.message.content}</p>
                <p>At {this.props.message.readableTime}</p>
                <button onClick={this.handleDeleteButton}>Delete</button>
                <button onClick={this.handleEditButton}>Edit</button>
            </section>
        } else {
            return <section key={this.props.message.id} id={`messageItem__${this.props.message.id}`} className="messagesContainer__messageItem">
                <p>{this.props.message.content}</p>
                <p>At {this.props.message.readableTime}</p>
            </section>
        }
    }

}