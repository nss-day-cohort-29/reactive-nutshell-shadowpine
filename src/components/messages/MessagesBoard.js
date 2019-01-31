// Author: Cole Bryant. Purpose: This component renders the messages section of the app and loops through the messages array passing various props

import React, { Component } from "react";
import MessagesForm from "./MessagesForm";
import MessagesCard from "./MessagesCard";
import "./Messages.css";

export default class MessagesBoard extends Component {

    messagesEnd=React.createRef()

    componentDidMount = () => {
        this.scrollToBottom();
    }

    componentDidUpdate = () => {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        if (this.messagesEnd.current) {
            this.messagesEnd.current.scrollIntoView({behavior: 'smooth'});
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className="messagesContainer">
                    <section className="messagesFeed">
                        {
                            this.props.messages.map(message => {
                                return <MessagesCard key={message.id} {...this.props} message={message} toggleFriendModal={this.toggleFriendModal} />
                            })
                        }
                        <div ref={this.messagesEnd}/>
                    </section>
                    <MessagesForm {...this.props} />
                </section>
            </React.Fragment>
        )
    }
}