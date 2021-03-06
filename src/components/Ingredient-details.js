import React, {useState} from 'react';
import './Ingredient-details.css'
import IngredientItem from './Ingredient-item'

import {
    BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';

const DEFAULT_PLACEHOLDER_IMAGE =
"https://kare.ee/images/no-image.jpg";


const IngredientDetails = (props) => {

    const onSelect = () => {
        props.onSelectIngredientCallback(props.id);
    }

    const ingredient = 
        props.image_url === "" ? DEFAULT_PLACEHOLDER_IMAGE : props.image_url;
        return (
        <div className="ingredient" >
            <div>
            <Link
                    to={{ pathname: '/ingredients/'+ props.id}}
                    className="list-group-item"
                    key={props.id}> 
                    <h2>{props.name} </h2>
                    <img 
                width="200"
                alt={`Ingredient name: ${props.name}`}
                src={ingredient}
            />
         <h5>also known as det: {props.alt_names} </h5>

        </Link>

            <Route path="/ingredients:id" component={IngredientItem}/>


            </div>

        </div>
        );
};

export default IngredientDetails;