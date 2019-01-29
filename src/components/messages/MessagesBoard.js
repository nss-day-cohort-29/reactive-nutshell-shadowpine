import React, {Component} from "react";
import MessagesForm from "./MessagesForm";
import "./Messages.css";

export default class MessagesBoard extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="messagesContainer">
                    {
                        this.props.messages.map(message => {
                            return <p key={message.id}>{message.content}</p>
                        })
                    }
                </section>
                <MessagesForm {...this.props} />
            </React.Fragment>
        )
    }
}