import React from 'react'

function NewsItem(props) {
    return (
        <li className = "NewsItem">
            <img
                className = "image"
                src = {props.article.urlToImage}
                widrh = "400px"
                height = "250px"
                alt = "Not Found"
            />
            <div className = "articleBody">
                <h2 className = "articleTitle">{props.article.title}</h2>
                <br/>
                <p className = "articleContent">{props.article.content}</p>
                <br/>
                <p className = "articleDescription">{props.article.description}</p>
                <br/>
                <div className = "articleFooter">
                    <span className = "articleAuthor">Author : {props.article.author}</span>
                    <span className = "articlePublished">Published at : {props.article.publishedAt}</span>
                    <span className = "articleSource">Author : {props.article.source.name}</span>
                    <a 
                        className = "articleLink"
                        href = {props.article.url}
                        target = "_blank"
                        rel = "noreferrer"
                    >
                        Link to the Article --&gr;
                    </a>
                </div>

            </div>
        </li>
    )
}

export default NewsItem
