import React from "react";
import IngredientDetailsPanel from './Ingredient-details-panel'
import SearchIngredients from './SearchIngredients'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';
      
const Ingredients = (props) => {
    const sortedIngredientsList = props.ingredientsList.sort((a,b) => (a.name > b.name ? 1:-1));
    const ingredientsResponseData = sortedIngredientsList.map((ingredient) => {
        return ( 
        < IngredientDetailsPanel
            key = {ingredient.id}
            id = {ingredient.id}
            name = {ingredient.name}
            alt_names = {ingredient.alt_names}
            quick_facts = {ingredient.quick_facts}
            purpose = {ingredient.purpose}
            image_url = {ingredient.image_url}
            safety = {ingredient.safety}
            onSelectIngredientCallback = {props.onSelectIngredientCallback}
            />      
            );
    });


    return (
        <div className = 'main-div-ingredients'>
        <div className = "header"> 
            <h1>ingredients</h1>
            <section className = "header-search"><SearchIngredients ingredients= {ingredientsResponseData} onFilteredProdCallback = {props.onFilteredProdCallback} /></section>
        </div>
        <div className = "ingredients">{ingredientsResponseData}</div>
        {/* <Link to={`/ingredients/${props.id}`}>{props.name}</Link> */}

    </div>
    )
}


export default Ingredients; 
