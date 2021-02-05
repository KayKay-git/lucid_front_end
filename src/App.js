import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Switch, Route, Link,  useParams } from 'react-router-dom';

// import { Lucid } from './components/Lucid';
// import { Products } from  './components/Products';
// import { Ingredients } from './components/Ingredients';
// import { Analyze }  from './components/Analyze';
// import { Header }  from './components/Header';
// import { Main } from './components/Main';
// import { Signup } from './components/Signup';
// import { Login}  from './components/Login';


import Lucid from './components/Lucid';
import Products from  './components/Products';
import ProductItem from  './components/Product-item';

import Ingredients from './components/Ingredients';
import Analyze  from './components/Analyze';
import Header  from './components/Header';
// import Main from './components/Main';
import Signup from './components/Signup';
import Login  from './components/Login';
import SearchBar from './components/Searchbar';


const App = () => {


const PRODUCTS_API_URL = "http://localhost:5000/products"
// const INGREDIENTS_API_URL = "http://localhost:5000/ingredients"


// PRODUCTS 
const [productsList, setProductsList] = useState([])
const [selectedProduct, setSelectedProduct] = useState(null)
const [errorMessage, setErrorMessage] = useState(null);

const onSelectProductCallback = (productId) => {
  setSelectedProduct(productsList.find((product)=> product.id === productId))
}

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
// Selected PRODUCTS 

  return (
    <Router className = 'App-main-div'>
        <div>
          <Header />

        </div>
      
        <Switch>

          <Route exact path='/'>
            <Lucid />
          </Route>

          <Route exact path='/products'>
            <Products productsList = {productsList} onSelectProductCallback ={onSelectProductCallback}/>
          </Route>

          <Route path='/products/:id' component = {ProductItem}>
            {/* <ProductItem product = {selectedProduct}/> */}
          </Route>

          <Route path='/ingredients'>
            <Ingredients  />
          </Route>

          <Route path='/analyze'>
            <Analyze />
          </Route>

          <Route path='/signup'>
            <Signup />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

        </Switch>
    </Router>

  );
}

export default App;




{/* <Switch>

        <Route path="/">
          <Lucid />
        </Route>

        <Route path="/products">
          <Products productsList = {productsList}/>
        </Route>

        <Route path="/ingredients">
          <Ingredients />
        </Route>

        <Route path="analyze">
          <Analyze />
        </Route>

        <Route path="signup">
          <Signup />
        </Route>

        <Route path="login">
          <Login />
        </Route>

    </Switch> */}

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);

//     useEffect(() => {
//     fetch(PRODUCTS_API_URL)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         setProducts(jsonResponse.Search);
//         setLoading(false);
//       });
//   }, []);

//     const search = searchValue => {
//     setLoading(true);
//     setErrorMessage(null);

//     fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         if (jsonResponse.Response === "True") {
//           setProducts(jsonResponse.Search);
//           setLoading(false);
//         } else {
//           setErrorMessage(jsonResponse.Error);
//           setLoading(false);
//         }
//       });
//   	};

    
//     return (
//      <div className="App">
//       <Header text="HOOKED" />
//       <SearchBar search={search} />
//       <Main />

//       <p className="App-intro">Sharing a few of our favourite Products</p>
//       <div className="products">
//         {loading && !errorMessage ? (
//          <span>loading...</span>
//          ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//           products.map((movie, index) => (
//             <Movie key={`${index}-${movie.Title}`} movie={movie} />
//           ))
//         )}
//       </div>
//     </div>
//   );


// }