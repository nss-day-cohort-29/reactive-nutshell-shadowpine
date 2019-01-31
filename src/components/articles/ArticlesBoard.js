// this file sorts through the existing articles and adds them to the DOM
// Author: Brittany Ramos-Janeway

import React, { Component } from "react";
import ArticlesCard from "./ArticlesCard"
import ArticlesForm from "./ArticlesForm"

export default class ArticlesBoard extends Component {
    state = {
        showForm: false
    };

    handleChange = () => {
        this.setState(state => ({showForm: !state.showForm}));
    };

    sortArticles = () => {
        this.props.articles.sort(function(a, b){
            return new Date(a.date) - new Date(b.date);
        })
    };

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
    };

    checkUser = (sessionUserId, articleId) => {
        let sameUser = false;

        if(sessionUserId === articleId){
            sameUser = true;
        }
        return sameUser;
    };

    render(){
        let sessionUser = sessionStorage.getItem("userId");
        let sessionUserId = Number(sessionUser);
        this.props.articles.sort(function(a,b){return new Date(a.timestamp) - new Date(b.timestamp)}).reverse()
        return (
            <React.Fragment>
                {/* Create title, new button, and articles container */}
                <h1>Articles</h1>
                {this.addForm()}
                <section className="articles">
                    {/* add each article to the DOM */}
                    {this.props.articles.map(article => {
                        let user = this.checkUser();
                        if(user){
                            return <ArticlesCard key={article.id} article={article} deleteArticle={this.props.deleteArticle} {...this.props} />
                        }
                    })}
                </section>
            </React.Fragment>
        )}
}