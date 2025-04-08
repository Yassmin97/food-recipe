import SearchBar from "../components/SearchBar";
import {useEffect, useRef, useState} from "react";
import RecipeCard from "../components/RecipeCard";


const HomePage = () => {
    const [meals, setMeals] = useState([]);
    const [searchMeals, setSearchMeals] = useState(null);
    const resultWrapperRef = useRef(null);

    useEffect(() => { 
        const fetchDefaultMeals = async() => { 
            try{
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
                const data = await response.json(); 
                setMeals (data.meals || []) 
               
            }catch (error) {
                console.error("Opps, cant fetch default meals:", error);
                setMeals([]) 
            }
        };
        fetchDefaultMeals(); 
    }, []);

    useEffect(() => {
        if (searchMeals) {
            resultWrapperRef.current.scrollIntoView({behavior: "smooth"})
            setSearchMeals(false);
        }
    }, [searchMeals])

    return(
        <div className="bg-white min-h-screen items-center p-40 w-full">
            <div className="max-w-screen-lg mx-auto px-4">
                
                <SearchBar setSearchMeals={setSearchMeals} setMeals={setMeals} /> 
                  
                <div ref={resultWrapperRef} className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mt-32 w-full max-w-screen-lg mx-auto">
                    {meals.length > 0 ? ( 
                        meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />) 
                    ) : (
                        <p className="text-black font-semibold">Oops! No Recipes Found</p> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default HomePage;