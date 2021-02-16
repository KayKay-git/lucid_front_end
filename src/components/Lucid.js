import React from 'react'
import SearchBar from './Searchbar';
import SearchProducts from './SearchProducts'
import { Link } from 'react-router-dom';
import './Lucid.css'
import ProductsHome from './ProductsHome';
import IngredientsHome from './IngredientsHome';
const Lucid = (props) => {
    return (
    <div className="main-div">
        <h1 className = 'brand-name'>LUCID</h1>    
            <h5 className='grey-text text-center w-responsive mx-auto mb-10'>
                Lucid is a tool designed to make learning about the ingredients in our products easier. 
            </h5> 
     <ProductsHome productsList = {props.productsList}/>
        
        <Link to="/products">
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button"> View More Products </button>
            </div>
        </Link>

    <IngredientsHome ingredientsList = {props.ingredientsList}/>

        <Link to="/ingredients">
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button"> View More Ingredients</button>
            </div>
        </Link>  
    </div>
    )
};


export default Lucid;