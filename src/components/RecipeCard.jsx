import React from 'react'

const RecipeCard = ({recipe}) => {
    const {idMeal,strMeal,strCategory,strMealThumb}=recipe;

    return (
        <div className="card">
        <img 
        
        src={strMealThumb}
         alt={strMeal}
         className="card-image"  

            
        />
        <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/meal/"+idMeal}  style={{ textDecoration: 'none',color:'black' }} target="_blank">Ingredients  List</a>
        
        </div>
        </div>
    )
}

export default RecipeCard
