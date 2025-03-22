import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/Header/Header.jsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.jsx";
import "./app.css";
import SearchInput from './components/SearchInput.jsx'

const App = () => {
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;
  const [searchQuery, setSearchQuery] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [timeoutId, setTimeoutId] = useState();

  // Fetch popular recipes on first load
  const fetchPopularRecipes = async () => {
    try {
      const response = await Axios.get(
        `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipeList(response.data.hits);
    } catch (error) {
      console.error("Error fetching popular recipes:", error);
    }
  };

  // Fetch search results
  const fetchSearchResults = async (query) => {
    if (!query) {
      fetchPopularRecipes(); // Show popular recipes again if search is cleared
      return;
    }

    try {
      const response = await Axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipeList(response.data.hits);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);

    const timeout = setTimeout(() => fetchSearchResults(e.target.value), 500);
    setTimeoutId(timeout);
  };

  // Load popular recipes on first visit
  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Search Header */}
      <Header searchQuery={searchQuery} onTextChange={handleSearch} />
      <SearchInput  searchQuery={searchQuery} onTextChange={handleSearch}/>
      {/* Recipe Results */}
      <div className="flex flex-wrap p-6 gap-5 justify-evenly">
        {recipeList.length ? (
          recipeList.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
