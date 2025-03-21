import { useState } from "react";
import PropTypes from "prop-types";

const Filters = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    onFilterChange(newCategory, cuisine);
  };

  const handleCuisineChange = (e) => {
    const newCuisine = e.target.value;
    setCuisine(newCuisine);
    onFilterChange(category, newCuisine);
  };

  return (
    <div className="flex justify-center space-x-4 mb-4 text-black bg-white">
      <select onChange={handleCategoryChange} className="border p-2 rounded-md">
        <option value="">All Categories</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
        <option value="Teatime">Teatime</option>
      </select>

      <select onChange={handleCuisineChange} className="border p-2 rounded-md">
        <option value="">All Cuisines</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Chinese">Chinese</option>
        <option value="American">American</option>
      </select>
    </div>
  );
};

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filters;
