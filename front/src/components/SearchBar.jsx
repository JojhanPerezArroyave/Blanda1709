import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Busca noticia por nombre..." />
      <button className="search-btn">🔍</button>
    </div>
  );
};

export default SearchBar;
