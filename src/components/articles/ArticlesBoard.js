import React, { Component } from "react";
import ArticlesCard from "./ArticlesCard"
import ArticlesForm from "./ArticlesForm"

export default class ArticlesBoard extends Component {
    state = {
        showForm: false
    };

    handleChange = () => {
        this.setState(state => ({showForm: !state.showForm}));
    }

    addForm = () => {
        if(this.state.showForm){
            return (
                <React.Fragment>
                    <ArticlesForm addArticle={this.props.addArticle} handleChange={this.handleChange} {...this.props}/>

                </React.Fragment>
            )
        } else {
            return (
                <button
                    className="article--new"
                    onClick={this.handleChange}>
                    Add Article
                </button>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                {/* Create title, new button, and articles container */}
                <h1>Articles</h1>
                {this.addForm()}
                <section className="articles">
                    {/* add each article to the DOM */}
                    {this.props.articles.map(article => (
                        <ArticlesCard key={article.id} article={article} deleteArticle={this.props.deleteArticle} {...this.props} />
                    ))}
                </section>
            </React.Fragment>
        )}
}