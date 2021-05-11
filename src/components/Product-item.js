import './Product-item.css'
import React, {useState, useEffect} from 'react';
// import './Product-details.css'
import { useParams} from "react-router-dom"
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Ingredients from './Ingredients';
import IngredientItem from './Ingredient-item'
import {browserHistory} from 'react-router'

const DEFAULT_PLACEHOLDER_IMAGE =
"https://kare.ee/images/no-image.jpg";

const ProductItem = (props) => {
    console.log(props)

    const [product, setProduct] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);

    const PRODUCT_API_URL_WITH_ID = `http://localhost:5000/products/${props.match.params.id}`

    useEffect(() => {
        axios.get(PRODUCT_API_URL_WITH_ID)
        .then((response) => {
            console.log(response.data)
            setProduct(response.data.product);
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
    }, []);

      // will not render unless null 
    if (!product) {
        return null 
    }

    const splitIngredients = product.ingredients.split(',')
    console.log(splitIngredients)
    console.log(props.match.params)
    // const {id} = props.match.params

    // console.log(ing)
    const productImage = product.image_url === "" ? DEFAULT_PLACEHOLDER_IMAGE : product.image_url;
        return (
        <div className="product-item" >
            <h2 className='text-center'>{product.name}</h2>
            <img className='product-img'
                width="200"
                alt={`Product name: ${product.name}`}
                src={productImage}
            />
            <h2 className='text-center'>description</h2>
            <p>{product.description}</p>
            <h2 className='text-center'>ingredients list</h2>
            <p className = 'ingredient-links'> 
                {
                splitIngredients.map(ingredient => 
                    <Link  
                        to={{ 
                            pathname: `/ingredients/${ingredient.trim()}`,
                        }}>
                        {ingredient},
                    </Link>
                    )
                }
            </p>
        </div>
        );
};

export default ProductItem;
