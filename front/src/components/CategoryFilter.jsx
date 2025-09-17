import React from "react";

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <label className="filter-label">Categoría:</label>
      <select className="filter-select">
        <option value="todas">Todas</option>
        <option value="politica">Política</option>
        <option value="farandula">Farándula</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
