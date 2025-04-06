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

      const getIngredients = () => {
        const ingredients = []

        for (let i = 1; i <= 20; i++){
          const ingredient = meal[`strIngredient${i}`]
          const measure = meal[`strMeasure${i}`]

          if (ingredient && ingredient.trim() !== ""){
            ingredients.push(`${measure} ${ingredient}`)
          }
        }
        return ingredients
      }

    return (
      <div className="max-w-2xl mx-auto px-4 py-8 bg-[#ffc83c90] rounded-lg shadow-lg mt-34 text-center">
        <h2 className="text-[#99154E] text-3xl font-bold mb-6">{meal.strMeal}</h2>
          
        <img src={meal.strMealThumb} alt={meal.strMeal} 
        className="w-50 mx-auto rounded-lg mb-6 shadow-md"/>

        {/* Ingredients */}
        <div className="text-left mb-6">
          <h3 className="text-[#99154E] text-xl font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {getIngredients().map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
        </div>

          {/* Instructions */}
           <h3 className="text-[#99154E] text-xl font-semibold mb-2 text-left">Instructions</h3> 
          <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">{meal.strInstructions}</p> 
      </div>
  )
  
}

export default RecipeDetails;