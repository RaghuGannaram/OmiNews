import React from 'react'

function NewsItem(props) {
    return (
        <li className = "newsItem">
            <img
                className = "newsImage"
                src = {props.article.urlToImage ? props.article.urlToImage : process.env.PUBLIC_URL +'/Image_not_available.png'}
                alt = "Not found" 
            />
            <div className = "articleBody">
                <h2 className = "articleTitle">{props.article.title}</h2>
                <br/>
                <p className = "articleContent">{props.article.content}</p>
                <br/>
                <p className = "articleDescription">{props.article.description}</p>
                <br/>
                <div className = "articleFooter">
                    <span className = "articleAuthor">Author : {props.article.author ? props.article.author : "Unknown" }</span>
                    <span className = "articlePublished">Published at : {props.article.publishedAt ? props.article.publishedAt : "Unknown"}</span>
                    <span className = "articleSource">Author : {props.article.source.name ? props.article.source.name : "Unknown"}</span>
                    <a 
                        className = "articleLink"
                        href = {props.article.url}
                        target = "_blank"
                        rel = "noreferrer"
                    >
                        Link to the Article --&gt;
                    </a>
                </div>

            </div>
        </li>
    )
}

export default NewsItem
