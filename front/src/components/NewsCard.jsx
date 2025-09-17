import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      {article.urlToImage ? (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-img"
        />
      ) : (
        <div className="image-placeholder">Sin imagen</div>
      )}
      <p className="date">
        {article.publishedAt && new Date(article.publishedAt).toLocaleString()}
      </p>
      <h3 className="title">{article.title}</h3>
      <p className="description">{article.description}</p>
      <div className="card-footer">
        <span className="star">⭐ {article.source?.name}</span>
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="view-btn"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
