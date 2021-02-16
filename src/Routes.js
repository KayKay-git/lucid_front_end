// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link,  useParams } from 'react-router-dom';

// import Lucid from './components/Lucid';
// import Products from  './components/Products';
// import ProductItem from  './components/Product-item';
// import Ingredients from './components/Ingredients';
// import IngredientItem from  './components/Ingredient-item';
// import Analyze  from './components/Analyze';
// import Header  from './components/Header';
// import Signup from './components/Signup';
// import Login  from './components/Login';
// import SearchBar from './components/Searchbar';

// const Routes = () => {
//     return (
//         <Router className = 'App-main-div'>
//             <Header />
            
//         <Switch>
//             <Route exact path='/'>
//             <Lucid />
//             </Route>

//             <Route exact path='/products'>
//                 <Products productsList = {productsList} onSelectProductCallback ={onSelectProductCallback}/>
//             </Route>

//             <Route path='/products/:id' component = {ProductItem}>
//             {/* <ProductItem product = {selectedProduct}/> */}
//             </Route>

//             <Route exact path='/ingredients'>
//                 <Ingredients ingredientsList = {ingredientsList} onSelectIngredientCallback ={onSelectIngredientCallback}/>
//             </Route>

//             <Route path='/ingredients/:id' component = {IngredientItem}>
//             {/* <ProductItem product = {selectedIngredient}/> */}
//             </Route>

//             <Route path='/analyze'>
//                 <Analyze />
//             </Route>

//             <Route path='/signup'>
//                 <Signup />
//             </Route>

//             <Route path='/login'>
//                 <Login />
//             </Route>

//             </Switch>

//         </Router>
//     )
// };


// export default Routes;