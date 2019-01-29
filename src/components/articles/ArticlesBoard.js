import React, { Component } from "react";

export default class ArticlesBoard extends Component {
    render(){
        return (
            <React.Fragment>
            <h1>Articles</h1>
            <section className="articles">
                {this.props.articles.map(article => (
                    <h3>{article.title}</h3>
                ))}
            </section>
            </React.Fragment>
        )}
}