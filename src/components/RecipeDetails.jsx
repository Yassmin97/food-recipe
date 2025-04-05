import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
    const {id} = useParams(); //get id from url
    const [meal, setMeal] = useState(null)
    
    useEffect(() => {
        if (!id) return; 
      
        const fetchMealDetails = async () => {
          try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            
            setMeal(data.meals ? data.meals[0] : null);
          } catch (error) {
            console.error("Error fetching meal details:", error);
            setMeal(null);
          }
        };
      
        fetchMealDetails();
      }, [id]);
      
    if (!meal) return <p className="text-white text-center mt-10">Loading...</p> 

    return (
      <div className="max-w-2xl mx-auto px-4 py-8 bg-[#C9DABF] rounded-lg shadow-lg mt-34 text-center">
          <h2 className="text-3xl font-bold mb-6">{meal.strMeal}</h2>
          
          <img src={meal.strMealThumb} alt={meal.strMeal} 
          className="w-50 mx-auto rounded-lg mb-6 shadow-md"/>
          <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">{meal.strInstructions}</p> 
      </div>
  )
  
}

export default RecipeDetails;