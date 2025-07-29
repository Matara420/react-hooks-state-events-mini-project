// src/components/CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Map over categories to create buttons */}
      {categories.map((category) => (
        <button
          key={category} // Use category as key
          className={category === selectedCategory ? "selected" : ""} // Apply 'selected' class
          onClick={() => onSelectCategory(category)} // Handle click to select category
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;