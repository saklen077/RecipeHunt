import React, { useState } from "react";
import Axios from "axios";
import Header from "./components/Header/index.jsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.jsx";
import "./app.css";
import Filters from "./components/Filters.jsx";
import SearchInput from './components/SearchInput.jsx'
const APP_ID = "a52b4d43";
const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [timeoutId, setTimeoutId] = useState();

  // Fetch search results
  const fetchSearchResults = async (query) => {
    if (!query) {
      setRecipeList([]);
      return;
    }
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipeList(response.data.hits);
  };

  // Fetch filter results with default query
  const fetchFilterResults = async () => {
    let url = `https://api.edamam.com/search?q=food&app_id=${APP_ID}&app_key=${APP_KEY}`; // Default "food" query

    if (category) url += `&mealType=${category}`;
    if (cuisine) url += `&cuisineType=${cuisine}`;

    const response = await Axios.get(url);
    setRecipeList(response.data.hits);
  };

  // Handle search input
  const handleSearch = (e) => {
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    setIsFiltering(false);

    const timeout = setTimeout(() => fetchSearchResults(e.target.value), 500);
    setTimeoutId(timeout);
  };

  // Handle filters
  const handleFilterChange = (selectedCategory, selectedCuisine) => {
    setCategory(selectedCategory);
    setCuisine(selectedCuisine);
    setIsFiltering(true);
    fetchFilterResults();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Search Header */}
      <Header />
      <SearchInput  searchQuery={searchQuery} onTextChange={handleSearch}/>
      {/* Filters Component (Pass Filter Handler) */}
      <Filters onFilterChange={handleFilterChange} />

      {/* Recipe Results */}
      <div className="flex flex-wrap p-6 gap-5 justify-evenly">
        {recipeList.length ? (
          recipeList.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <img
            src="/react-recipe-finder/hamburger.svg"
            className="w-30 h-30 my-48 mx-auto opacity-50"
            alt="placeholder"
          />
        )}
      </div>
    </div>
  );
};

export default App;
