import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => { 
    const [favorites, setFavorites] = useState([]); 

    const loadFavorites = () => {
        const saved = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(saved)
    }

    useEffect(() => {
        loadFavorites()
    }, [])

    return(
        <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
            <div className="max-w-screen-lg ms-auto">
                <h1 className="text-[#99154E] mt-32 font-bold md:text-4xl my-6">My Favorites</h1>

                {favorites.length === 0 ? ( 
                    <div className="h-[40vh] flex flex-col gap-4">
                        <p className="text-lg text-black">No favorites added yet</p>
                        </div>
                ): (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((meal) => ( 
                    <RecipeCard key={meal.idMeal} 
                    meal ={meal} 
                    onFavoritesToggle={loadFavorites}/>
                     ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default FavoritesPage;