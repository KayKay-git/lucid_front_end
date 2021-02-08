import React from "react";
import IngredientDetails from './Ingredient-details'
import IngredientItem from './Ingredient-item'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';
      
const Ingredients = (props) => {
    const sortedIngredientsList = props.ingredientsList.sort((a,b) => (a.name > b.name ? 1:-1));
    const ingredientsResponseData = sortedIngredientsList.map((ingredient) => {
        return ( 
        < IngredientDetails
            key = {ingredient.id}
            id = {ingredient.id}
            name = {ingredient.name}
            quick_facts = {ingredient.quick_facts}
            purpose = {ingredient.purpose}
            image_url = {ingredient.image_url}
            safety = {ingredient.safety}
            onSelectIngredientCallback = {props.onSelectIngredientCallback}
            />      
            );
    });


    return (
        <div className = 'ingredients'>
            <h1>ingredients</h1>

            {ingredientsResponseData}
            <Link to={`/ingredients/${props.id}`}>{props.name}</Link>

        </div>
    )
}


export default Ingredients; 
