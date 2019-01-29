import React, { Component } from "react";
import ArticlesCard from "./ArticlesCard"
import ArticlesForm from "./ArticlesForm"

export default class ArticlesBoard extends Component {

    render(){
        return (
            <React.Fragment>
                {/* Create title, new button, and articles container */}
                <h1>Articles</h1>
                <button
                    className="article--new"
                    onClick={() => {
                        console.log("I will work someday")
                    }}>
                    Add Article
                </button>
                <section className="articles">
                    {/* add each article to the DOM */}
                    {this.props.articles.map(article => (
                        <ArticlesCard key={article.id} article={article} deleteArticle={this.props.deleteArticle} {...this.props} />
                    ))}
                </section>
            </React.Fragment>
        )}
}