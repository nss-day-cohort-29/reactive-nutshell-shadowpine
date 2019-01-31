// this fild adds the specific data from the database to the card that holds information for each specific article
// Author: Brittany Ramos-Janeway

import React, { Component } from "react";


export default class ArticleCard extends Component {

    render() {
        return (
            // create container for each individual article with title, corresponding delete button and article synopsis
            <div key={this.props.article.id} className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.article.title}
                    </h4>

                    <p>{this.props.article.url}<br />{this.props.article.synopsis}</p>
                    <button className={`article--${this.props.article.id} btn btn-warning`} onClick={() => this.props.deleteArticle(this.props.article.id)}>Delete</button>
                </div>
                <div className="card-body">
                    <h5>Posted by {this.props.article.user.userName}</h5>
                    <p>{this.props.article.date}</p>
                </div>
            </div>
        )
    }
}