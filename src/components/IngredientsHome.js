import React from "react";
import IngredientsDetailsPanel from './Ingredient-details-panel'
import IngredientItem from './Ingredient-item'
import { Link } from 'react-router-dom';
import SearchIngredients from './SearchIngredients'
import SearchPage from "./SearchPage";
import './IngredientsHome.css';

const IngredientsHome= (props) => {
    const sortedIngredientsList = props.ingredientsList.sort((a,b) => (a.name > b.name ? 1:-1));
    const ingredientsResponseData = sortedIngredientsList.map((ingredient) => {
        return ( 
        < IngredientsDetailsPanel
            key = {ingredient.id}
            id = {ingredient.id}
            name = {ingredient.name}
            description = {ingredient.description}
            ingredients = {ingredient.ingredients}
            image_url = {ingredient.image_url}
            onSelectIngredientCallback = {props.onSelectIngredientCallback}
            />      
            );
    });
// Shuffle array
const shuffled = ingredientsResponseData.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 4);

    return (        
    
    <div className = 'main-div-ingredients'>

        <section className='text-center my-5'>
            {/* <h2 className='h1-responsive font-weight-bold text-center my-5'>ingredients</h2> */}               
        </section>
            <div className = "header"> 
            <h1>ingredients</h1>
            {/* <p className='teal-text text-center w-responsive mx-auto mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p> */}
            </div>
            <div className = "ingredients">{selected}</div>
            {/* <Link to={`/ingredients/${props.id}`}>{props.name}</Link> */}

        </div>
    )
}


export default IngredientsHome; 


