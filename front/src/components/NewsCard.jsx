import React from "react";

const NewsCard = ({ date, title, description }) => {
  return (
    <div className="news-card">
      <div className="image-placeholder">Imagen</div>
      <p className="date">{date}</p>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="card-footer">
        <span className="star">⭐</span>
        <button className="view-btn">Ver más</button>
      </div>
    </div>
  );
};

export default NewsCard;
