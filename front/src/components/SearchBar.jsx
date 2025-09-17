import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Busca noticia por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn">🔍</button>
    </div>
  );
};

export default SearchBar;
