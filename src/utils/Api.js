export const fetchMeals = async (query) => {
    try{    
        const response = await fetch(
            'www.themealdb.com/api/json/v1/1/search.php?s=${query}'
        );
         const data = await response.json();
         return data.meals || [];
    }catch (error) {
        console.error("Something went wrong:", error);
        return [];
    }
}