import React from "react";
import ProductsDetailsPanel from './Product-details-panel'
import ProductItem from './Product-item'
import { Link } from 'react-router-dom';
import SearchProducts from './SearchProducts'
import SearchPage from "./SearchPage";
import './Products.css';

const Products = (props) => {
    const sortedProductsList = props.productsList.sort((a,b) => (a.name > b.name ? 1:-1));
    const productsResponseData = sortedProductsList.map((product) => {
        return ( 
        < ProductsDetailsPanel
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
        <div className = 'main-div-products'>
            <div className = "header"> 
                <h1>products</h1>
                <section className = "header-search"><SearchProducts products= {productsResponseData} onFilteredProdCallback = {props.onFilteredProdCallback} /></section>
            </div>
            <div className = "products">{productsResponseData}</div>
            {/* <Link to={`/products/${props.id}`}>{props.name}</Link> */}

        </div>
    )
}


export default Products; 




