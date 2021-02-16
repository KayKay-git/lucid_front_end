import React, {useState} from 'react';
import './Ingredient-details-panel.css'
import IngredientItem from './Ingredient-item'

import {
    BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';

const DEFAULT_PLACEHOLDER_IMAGE =
"https://kare.ee/images/no-image.jpg";


const IngredientDetailsPanel = (props) => {

    const onSelect = () => {
        props.onSelectIngredientCallback(props.id);
    }

    const ingredient = 
        props.image_url === "" ? DEFAULT_PLACEHOLDER_IMAGE : props.image_url;
        return (
        <div className="ingredient-card" >
            
            <Link
                    to={{ pathname: '/ingredients/'+ props.id}}
                    className="list-group-item"
                    key={props.id}> 
                <img 
                width="200"
                alt={`Ingredient name: ${props.name}`}
                src={props.image_url}
                
                />
                    <h2>{props.name} </h2>

            <h4>{props.purpose}</h4>

            </Link>

            <Route path="/ingredients:id" component={IngredientItem}/>


        </div>
        );
};

export default IngredientDetailsPanel;