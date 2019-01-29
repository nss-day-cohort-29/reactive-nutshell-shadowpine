import React, { Component } from "react";
import ArticlesCard from "./ArticlesCard"

export default class ArticlesBoard extends Component {
    render(){
        return (
            <React.Fragment>
                {/* Create title, new button, and articles container */}
                <h1>Articles</h1>
                <button className="article--new">Add Article</button>
                <section className="articles">
                    {/* add each article to the DOM */}
                    {this.props.articles.map(article => (
                        <ArticlesCard key={article.id} article={article} {...this.props} />
                    ))}
                </section>
            </React.Fragment>
        )}
}