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
                            const timeStamp = message.timeStamp;
                            let hour = timeStamp.getHours();
                            let amPm = "";
                            const hourify = () => {
                                if (hour <= 12) {
                                    amPm = "A.M.";
                                    return hour;
                                } else if (hour > 12) {
                                    amPm = "P.M.";
                                    return hour - 12;
                                };
                            };
                            const hourName = hourify();
                            const minutes = timeStamp.getMinutes();
                            const seconds = timeStamp.getSeconds();
                            return <section key={message.id} className="messagesContainer__messageItem">
                                <p>{message.content}</p>
                                <p>{hourName}:{minutes}:{seconds}{amPm}</p>
                            </section>
                        })
                    }
                </section>
                <MessagesForm {...this.props} />
            </React.Fragment>
        )
    }
}