import React, { useState, useEffect } from "react";
import axios from 'axios';

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link,  useParams } from 'react-router-dom';
// import {routerActions} from 'react-router-redux';
// import {UserAuthWrapper} from 'redux-auth-wrapper';

import Lucid from './components/Lucid';
import Products from  './components/Products';
import ProductItem from  './components/Product-item';
import Ingredients from './components/Ingredients';
import IngredientItem from  './components/Ingredient-item';
import IngredientDetails from './components/Ingredient-details'
import Analyze  from './components/Analyze';
import Header  from './components/Header';
import Signup from './components/Signup';
import Login  from './components/Login';
import Logout  from './components/Logout';
import Profile  from './components/Profile';
import FooterPage from './components/Footer'
import SearchBar from './components/Searchbar';
// import Routes from './Routes';
import SearchPage from './components/SearchPage';
import Search from './components/Search';
import SearchProducts from './components/SearchProducts'
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom'

const App = () => {


const PRODUCTS_API_URL = "http://localhost:5000/products"

// PRODUCTS 
const [productsList, setProductsList] = useState([])
const [selectedProduct, setSelectedProduct] = useState(null)
const [filteredProdSearch, setFilteredProdSearch] = useState(null)

const [errorMessage, setErrorMessage] = useState(null);

const onSelectProductCallback = (productId) => {
  setSelectedProduct(productsList.find((product)=> product.id === productId))
}
//   const history = useHistory();

// const onFilteredProdCallback = (filteredProd) => {
//   setFilteredProdSearch(filteredProd)
//   history.push('/products/SearchPage')
// }

console.log(filteredProdSearch)
useEffect(() => {
  axios.get(PRODUCTS_API_URL)
    .then((response) => {
      console.log(response.data)
      setProductsList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
}, []);

console.log(productsList)
console.log(selectedProduct)
console.log(filteredProdSearch)

//------------------------------------------------------------//

// INGREDIENTS 
const INGREDIENTS_API_URL = "http://localhost:5000/ingredients"

const [ingredientsList, setIngredientsList] = useState([])
const [selectedIngredient, setSelectedIngredient] = useState(null)
const [filteredIngSearch, setFilteredIngSearch] = useState(null)

const onSelectIngredientCallback = (ingredientId) => {
  setSelectedIngredient(ingredientsList.find((ingredient)=> ingredient.id === ingredientId))
}
// const onFilteredIngCallback = (filteredIng) => {
//   setFilteredIngSearch(filteredIng)
// }

useEffect(() => {
  axios.get(INGREDIENTS_API_URL)
    .then((response) => {
      console.log(response.data)
      setIngredientsList(response.data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
}, []);

console.log(ingredientsList)
console.log(selectedIngredient)

  return (
    <Router className = 'App-main-div'>
        <div>
          <Header />
      </div>
        <Switch>

          <Route exact path='/'>
            <Lucid productsList = {productsList} ingredientsList = {ingredientsList}/>
          </Route>

          <Route exact path='/profile'>
            <Profile />
            {/* <Profile component={UserIsAuthenticated(Profile)} /> */}
          </Route>

          <Route exact path='/products'>
            <Products productsList = {productsList} onSelectProductCallback ={onSelectProductCallback} />
          </Route>

          <Route path='/products/:id' component = {ProductItem}>
            {/* <ProductItem product = {selectedProduct}/> */}
          </Route>


          {/* <Route path='/products/SearchPage' component = {SearchPage}>
            <SearchPage filteredProdSearch = {filteredProdSearch} fiteredIngSearch = {filteredIngSearch}/>
          </Route> */}


          <Route exact path='/ingredients'>
            <Ingredients ingredientsList = {ingredientsList} onSelectIngredientCallback ={onSelectIngredientCallback}/>
            {/* <SearchIngredients onFilteredIngCallback = {onFilteredIngCallback}/> */}
          </Route>

          <Route path='/ingredients/:id' component = {IngredientItem}>
            {/* <ProductItem product = {selectedIngredient}/> */}
          </Route>

          <Route path='/analyze'>
            <Analyze />
          </Route>

          <Route path='/signup'>
            <Signup />
          </Route>

          <Route path='/login' component = {Login}>
          </Route>

          <Route path='/SearchPage' component = {SearchPage}> 
            {/* <SearchBar filteredProdSearch = {filteredProdSearch} fiteredIngSearch = {filteredIngSearch}/> */}
            {/* <SearchProducts onFilteredProdCallback = {onFilteredProdCallback} /> */}
            <SearchProducts/>

          </Route> 

          {/* <Route path='/SearchPage' component={SearchPage}>
          </Route> */}

        </Switch>
    <div classsName = "footer">       
       <FooterPage />
    </div>
    </Router>
   
  );
}


export default App;
