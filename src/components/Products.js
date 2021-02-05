import React from "react";
import ProductsDetails from './Product-details'
import ProductItem from './Product-item'
import {
    BrowserRouter as Router,
    Route,
    Link
      } from 'react-router-dom';
      
const Products = (props) => {
    const sortedProductsList = props.productsList.sort((a,b) => (a.name > b.name ? 1:-1));
    const productsResponseData = sortedProductsList.map((product) => {
        return ( 
        < ProductsDetails
            key = {product.id}
            id = {product.id}
            name = {product.name}
            description = {product.description}
            ingredients = {product.ingredients}
            image_url = {product.image_url}
            onSelectProductCallback = {props.onSelectProductCallback}
            />      
            );
    });


    return (
        <div className = 'products'>
            <h1>products</h1>

            {productsResponseData}
            <Link to={`/products/${props.id}`}>{props.name}</Link>

        </div>
    )
}


export default Products; 




