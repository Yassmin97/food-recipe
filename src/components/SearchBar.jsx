import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({setMeals}) => {
  const [query, setQuery] = useState("")

  const searchMeals = async (e) => {
    e.preventDefault();
    if (!query) return;
  
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals); 
      } else {
        setMeals([]); 
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]); // Clears list on API failure
    }
  };
  

  return (
    <div className=" w-full h-[450px] md:h-[350px] flex items-center justify-center">
  {/* bg img */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/Background.jpg')",
      filter: "brightness(80%)",}} ></div>

  {/* Search Box */}
  <div className="relative flex flex-col items-center w-full max-w-2xl">
    <h1 className="text-white text-3xl font-bold mb-4 text-center">
      Find Your Favorite Recipe
    </h1>

    {/* Search Box */}
    <form className="relative w-full" onSubmit={searchMeals}>
      <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
        <Search className="text-gray-500 mx-3" size={25} />

        <input
          type="text"
          className="flex-grow px-3 py-3 text-lg border-none outline-none rounded-lg"
          placeholder="What do you want to cook today?"
          value={query}
          onChange={(e) => setQuery(e.target.value)} />

        <button
          type="submit"
          className="bg-[#5F6F65] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#4a5a54] transition" >
          Search
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default SearchBar;