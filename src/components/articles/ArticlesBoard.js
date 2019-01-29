import React, { Component } from "react";

export default class ArticlesBoard extends Component {
    render(){
        console.log(this.props.articles)
        return <h1>Articles</h1>
    }
}