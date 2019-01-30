import React, { Component } from "react";
import MessagesForm from "./MessagesForm";
import MessagesCard from "./MessagesCard";
import "./Messages.css";

export default class MessagesBoard extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="messagesContainer">
                    <section className="messagesFeed">
                        {
                            this.props.messages.map(message => {
                                return <MessagesCard key={message.id} {...this.props} message={message} />
                            })
                        }
                    </section>
                    <MessagesForm {...this.props} />
                </section>
            </React.Fragment>
        )
    }
}