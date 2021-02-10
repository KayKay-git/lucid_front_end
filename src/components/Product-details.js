import React, {useState} from 'react';
import './Product-details.css'
import ProductItem from './Product-item'

import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';

const DEFAULT_PLACEHOLDER_IMAGE =
"https://kare.ee/images/no-image.jpg";


const ProductsDetails = (props) => {

    // const onSelect = () => {
    //     props.onSelectIngredientCallback(props.id);
    // }

    const product = 
        props.image_url === "" ? DEFAULT_PLACEHOLDER_IMAGE : props.image_url;
        return (
        <div className="product" >
            <div>
            <Link
                    to={{ pathname: '/products/'+ props.id}}
                    className="list-group-item"
                    key={props.id}> 
                    <h2>{props.name} </h2>
                    
            </Link>

            <Route path="/products:id" component={ProductItem}/>

            <img 
                width="200"
                alt={`Product name: ${product.name}`}
                src={product}
            />
            </div>
            <p>{props.description}</p>

        </div>
        );
};

export default ProductsDetails;