import React from "react";
import ProductsDetailsPanel from './Product-details-panel'
import ProductItem from './Product-item'
import { Link } from 'react-router-dom';
import SearchProducts from './SearchProducts'
import SearchPage from "./SearchPage";
import './ProductsHome.css';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";

// import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip } from 'mdbreact';
const ProductsHome= (props) => {
    console.log(props.productsList)
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
    console.log(productsResponseData)
// Shuffle array
const shuffled = productsResponseData.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 4);
console.log(selected)

let randomItem = shuffled[Math.floor(Math.random()*shuffled.length)]

console.log(randomItem)
    return (
        // <div className = 'main-div-products'>
        //     <div className = "header"> 
        //         <h1>products</h1>
        //     </div>
        //     <div className = "products">{selected}</div>
        //     {/* <Link to={`/products/${props.id}`}>{props.name}</Link> */}

        // </div>
        // {selected.map(product => product.props.name)}

        

    <div>
        <div className = 'main-div-products'>
            <div className = "header"> 
                <h1>products</h1>
                {/* <p className='black-text text-center w-responsive mx-auto mb-5'>
                    There are a lot of skin care products on the market. Learn more about the ingredients used in them!
                </p> */}
            </div>
            <div className = "products">{selected}</div>
            {/* <Link to={`/products/${props.id}`}>{props.name}</Link> */}

        </div>
        {/* {selected.map(product => product.props.name)} */}

    </div>
        
    );
};


export default ProductsHome; 




