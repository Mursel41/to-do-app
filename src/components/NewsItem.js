import React from 'react'

function NewsItem(props) {
    const { url, urlToImage, title, description } = props.data;
    return (
        <div className="news-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="img-container">
                    <img src={urlToImage} alt={title} />
                </div>
                <div className="text-container">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default NewsItem;