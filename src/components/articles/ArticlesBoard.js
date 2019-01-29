import React, { Component } from "react";
import ArticlesCard from "./ArticlesCard"

export default class ArticlesBoard extends Component {
    render(){
        return (
            <React.Fragment>
            <h1>Articles</h1>
            <button class="article--new">Add Article</button>
            <section className="articles">
                {this.props.articles.map(article => (
                    <ArticlesCard key={article.id} article={article} {...this.props} />
                ))}
            </section>
            </React.Fragment>
        )}
}