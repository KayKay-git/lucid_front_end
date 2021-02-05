// import { Lucid } from './Lucid';
// import { Products } from  './Products';
// import { Ingredients } from './Ingredients';
// import { Analyze }  from './Analyze';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import React, { useState, useEffect } from "react";


// const PRODUCTS_API_URL = "http://localhost:5000/products"
// // const INGREDIENTS_API_URL = "http://localhost:5000/products"


// export const Main = () => {

// const [errorMessage, setErrorMessage] = useState(null);

// // PRODUCTS 
// const [productsList, setProductsList] = useState([])
// const [selectedProduct, setSelectedProduct] = useState(null)

// useEffect(() => {
//   axios.get(PRODUCTS_API_URL)
//     .then((response) => {
//       console.log(response.data)

//       setProductsList(response.data);
//     })
//     .catch((error) => {
//       setErrorMessage(error.message);
//     });
// }, []);


//     return (
//     <main>
//         <Switch>
            
//             <Route exact path='/' component={Lucid}/>
//             <Route path='/products' component={Products}
//                 render={() => <Products productsList={productsList} />} 
//             />
//             <Route path='/ingredients' component={Ingredients} />
//             <Route path='/analyze' component={Analyze} />
//             {/* <Route path='/signup' component={signup} />
//             <Route path='/login' component={login} /> */}
//         </Switch>
//         <p>main</p>
//     </main>
//     )
// }