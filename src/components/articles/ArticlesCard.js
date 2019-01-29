import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleCard extends Component {
    render() {
        return (
            <div key={this.props.article.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.article.title}
                    </h5>
                    <p>{this.props.article.synopsis}</p>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}