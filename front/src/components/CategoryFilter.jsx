import React from "react";

const CategoryFilter = ({ categories, category, setCategory }) => {
  return (
    <div className="category-filter">
      <label className="filter-label">Categoría:</label>
      <select
        className="filter-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
