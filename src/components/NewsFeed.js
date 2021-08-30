import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from "./NewsItem";


export class NewsFeed extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             articles : []
        }
    }
    
    componentDidMount(){
        axios.get("https://newsapi.org/v2/everything?q='india'&apiKey=50fdb2db60ae4a758a309131025cfaac&language=en")
        .then(res =>{
            this.setState({articles : res.data.articles})
        })
    }

    render() {
        return (
            <ul className = "newsFeed">
                {this.state.articles.map((article, i) => <NewsItem key = {i} article = {article}/>)}
            </ul>
        )
    }
}

export default NewsFeed
