import { Heart } from "lucide-react";
import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";


const RecipeCard =({meal, onFavoritesToggle})=> { 
    const [isFavorite, setIsFavorite] = useState(false) 
    
    useEffect(() => {   
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(savedFavorites.some(fav => fav.idMeal === meal.idMeal))
    }, [meal.idMeal]);

    
    const toggleFavorite = (e) => {
        e.stopPropagation() 
        e.preventDefault()  

        let updatedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFavorite) {
            updatedFavorites = updatedFavorites.filter((fav) => fav.idMeal !== meal.idMeal); 
        }else{
            updatedFavorites.push(meal) 
        }
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)) 
            setIsFavorite(!isFavorite); 

        if (onFavoritesToggle){ 
            onFavoritesToggle()
        }    
    }
    
    return (
        <div className="flex flex-col rounded-md bg-[#ffc83c90] overflow-hidden relative">
        <div className="relative h-42">
       
          <div
            className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer z-10"
            onClick={toggleFavorite}
          >
            <Heart
              size={20}
              className={`transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
              } hover:fill-red-500 hover:text-red-500`}
            />
          </div>
      
          <Link to={`/meal/${meal.idMeal}`}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-md w-full h-full object-cover cursor-pointer"
            />
          </Link>
        </div>
                          
        <p className="font-bold pl-2 pt-2">{meal.strMeal}</p>   
        <p className="text-[#39483e] font-semibold pl-2 pt-2">{meal.strCategory}</p>
        
        <div className="flex gap-2 mt-2 m-2">
            <div className="flex gap-1 bg-[#99154E] items-center p-1.5 rounded-md">
                <span className="text-sm text-white tracking-tighter font font-semibold">{meal.strArea} </span>                
                </div>
            </div>
        </div>
    )
}
export default RecipeCard;