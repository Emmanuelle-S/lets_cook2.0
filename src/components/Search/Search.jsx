import { useState } from "react";
import recettes from "../../assets/recettes.json";
import Card from "../Card/Card";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term === "") {
      // Si la recherche est vide, réinitialiser à toutes les recettes
      setFilteredRecipes([]);
    } else {
      const filtered = recettes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase()) ||
          recipe.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div className="mt-8 mb-2">
      <form className="flex items-center gap-4">
        <label className="relative flex-grow">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 bg-white w-full border-2 border-red-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-red-600 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </label>
        <button
          className="text-center px-4 py-2 font-semibold border border-red-600 rounded-md transition-colors duration-300
                text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
        <button className="min-w-16 text-center px-4 py-2 text-white font-semibold rounded-md transition-colors duration-300 bg-red-800 hover:bg-red-700">
          <span>Reset</span>
        </button>
      </form>
      {/* Affichage des recettes filtrées */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Search;
