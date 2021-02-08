import React, {useState, useEffect} from 'react';
// import './Product-details.css'
import { useParams} from "react-router-dom"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';

const DEFAULT_PLACEHOLDER_IMAGE =
"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const IngredientItem = (props) => {
    console.log(props)

    const [ingredient, setIngredient] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);

    const INGREDIENT_API_URL_WITH_ID = `http://localhost:5000/ingredients/${props.match.params.id}`

    useEffect(() => {
        axios.get(INGREDIENT_API_URL_WITH_ID)
          .then((response) => {
            console.log(response.data)
            setIngredient(response.data.ingredient);
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      }, []);

      // will not render unless null 
    if (!ingredient) {
        return null 
    }

    console.log(ingredient)

    // const splitIngredients = ingredient.ingredients.split(';')
    // console.log(splitIngredients)
    // const ing = splitIngredients.map((ingredient) => {
    //     return (
    //         <Ingredient /> 
    //     );
    // });

    const ingredientImage = 
        ingredient.image_url === "" ? DEFAULT_PLACEHOLDER_IMAGE : ingredient.image_url;
        return (

        <div className="ingredient">
            <h2>{ingredient.name}</h2>
            <div>
            <img
                width="200"
                alt={`Ingredient name: ${ingredient.name}`}
                src={ingredientImage}
            />
            </div>
            <p>{ingredient.description}</p>
            {/* <Link> {ing} </Link> */}
            <p>{ingredient.ingredients}</p>

        </div>
        );
};

export default IngredientItem;