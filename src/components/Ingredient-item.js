import React, {useState, useEffect} from 'react';
// import './Product-details.css'
import { useParams} from "react-router-dom"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';
import './Ingredient-item.css'

const DEFAULT_PLACEHOLDER_IMAGE =
"https://kare.ee/images/no-image.jpg";

const IngredientItem = (props) => {
    console.log(props)

    const [ingredient, setIngredient] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);

    const INGREDIENT_API_URL_WITH_ID = `http://localhost:5000/ingredients/${props.match.params.id}`

    useEffect(() => {
        axios.get(INGREDIENT_API_URL_WITH_ID)
          .then((response) => {
            console.log(response.data)
            console.log(response.data.ingredient)

            setIngredient(response.data.ingredient);
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      }, []);

      // will not render unless null 
    if (!ingredient) {
        return 'Sorry that ingredient has not been added yet!' 
    }

    console.log(ingredient)
    console.log(ingredient.alt_names)


    const ingredientImage = 
        ingredient.image_url === "" ? DEFAULT_PLACEHOLDER_IMAGE : ingredient.image_url;
        return (

        <div className="ingredient-item">
            <h2 className='text-center'>{ingredient.name}</h2>
            <div>
            <img className = 'ing-img'
                width="200"
                alt={`Ingredient name: ${ingredient.name}`}
                src={ingredientImage}
            />
            </div>
            {/* <h2>also known as:</h2> */}
            <p>{ingredient.alt_names}</p>
            <h2 className='text-center'>purpose:</h2>
            <p className='text-center'>{ingredient.purpose}</p>
            <h2 className='text-center'>description:</h2>
            <p>{ingredient.description}</p>
            <h2 className='text-center'>safety:</h2>
            <p>{ingredient.safety}</p>
            <h2 className='text-center'>quick facts:</h2>
            <p>{ingredient.quick_facts}</p>

        </div>
        );
};

export default IngredientItem;