import React, {useState} from 'react';
import './Product-details-panel.css'
import ProductItem from './Product-item'

import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';

const DEFAULT_PLACEHOLDER_IMAGE =
"https://kare.ee/images/no-image.jpg";


const ProductsDetailsPanel = (props) => {

    // const onSelect = () => {
    //     props.onSelectIngredientCallback(props.id);
    // }

    const product = 
        props.image_url === "" ? DEFAULT_PLACEHOLDER_IMAGE : props.image_url;
        return (
        <div className="products" >
            <div className = "product-card">

            <Link
                    to={{ pathname: '/products/'+ props.id}}
                    className="list-group-item"
                    key={props.id}> 
                    <img
                        width="200"
                        alt={`Product name: ${product.name}`}
                        src={product}
                    />   
                    <h5>{props.name} </h5>

            </Link>

            <Route path="/products:id" component={ProductItem}/>

            </div>
        </div>
        );
};

export default ProductsDetailsPanel;