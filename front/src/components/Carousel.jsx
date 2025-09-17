import React, { useRef } from "react";
import NewsCard from "./NewsCard";

const Carousel = ({ news }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav-btn" onClick={scrollLeft}>⬅️</button>
      
      <div className="cards-container" ref={scrollRef}>
        {news.map((item, index) => (
          <NewsCard
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <button className="nav-btn" onClick={scrollRight}>➡️</button>
    </div>
  );
};

export default Carousel;
