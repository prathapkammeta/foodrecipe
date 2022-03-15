import React,{useState,useEffect} from 'react'
import SearchMeal from './components/SearchMeal';
import RecipeCard from './components/RecipeCard';

import './App.css'
const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=";

const App = () => {





 const[isLoading,setIsLoading]=useState(false);
 const[query,setQuery]=useState("");
 const[recipes,setRecipes]=useState([]);
//  function to search for the meals


  const searchRecipes=async ()=>{
    setIsLoading(true);
    const url=apiUrl+query;
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
    setQuery("");
  };
  useEffect(()=>{
    searchRecipes();
     
  },[])

const handleSubmit=event=>{
  event.preventDefault();
  searchRecipes();
}

  return (
    <div className="container">
      <h1>Recipe Application</h1>
      <SearchMeal
      handleSubmit={handleSubmit}
      value={query}
      onChange={event=>setQuery(event.target.value)}
      isLoading={isLoading}
      />
      <div className="recipes">
      
      {recipes ? recipes.map(recipe=>(
        <RecipeCard
        key={recipe.idMeal}
        recipe={recipe}

        
        />
      )):"No Recipes!"}
             </div>
      </div>
  )

}


export default App
hi

