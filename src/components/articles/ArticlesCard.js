import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleCard extends Component {
    render() {
        return (
            <div key={this.props.article.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <h3>{this.props.article.title}</h3>
                        <button>Delete</button>
                    </h5>
                </div>
            </div>
        )
    }
}