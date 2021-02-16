// import React from 'react';
// import './Search.css';
// import axios from 'axios';
// import { useState, useEffect } from "react";
// import SearchDetail from './Search-results'

// const Search = (props) => {

//     const [products, ingredients] = props 
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [filteredIngredients, setFilteredIngredients] = useState([]);


//     const [products, setProducts] = useState([]);
//     const [ingredients, setIngredients] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [search, setSearch] = useState("");
//     const [filteredProducts, setFilteredProducts] = useState([]);
  
//     useEffect(() => {
//       setLoading(true);
//       axios.get("https://restproducts.eu/rest/v2/all")
//         .then((res) => {
//           setProducts(res.data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, []);
  
//     useEffect(() => {
//       setFilteredProducts(
//         products.filter((country) =>
//           country.name.toLowerCase().includes(search.toLowerCase())
//         )
//       );
//     }, [search, products]);
  
//     if (loading) {
//       return <p>Loading products...</p>;
//     }
  
//     return (
//       <div className="App">
//         <h1>products Lists</h1>
//         <input
//           type="text"
//           placeholder="Search products"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         {filteredProducts.map((product, idx) => (
//           <SearchDetail key={idx} {...product} />
//         ))}
//       </div>
//     );
//   }
  

// export default Search;