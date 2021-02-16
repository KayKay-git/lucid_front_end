// import React, { useEffect, useState } from "react";
// import { MDBCol, MDBIcon, MDBFormInline } from "mdbreact";
// import './Searchbar.css';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import SearchResult from './SearchResult';
// import { withRouter, Link } from 'react-router-dom';
// import SearchPage from './SearchPage';

// const SearchBar = (props) => {

//   console.log(props.products)
//   const [query, setQuery] = useState('')
//   const [filteredComponents, setFilteredComponents] = useState([])


//   const onInputChange = (event) => {
//       setQuery(event.target.value);
//   }

//   const filter = (data, term) => {
//       if (!term) {
//           return data;
//       }
  
//       return data.filter((item) => {
//           console.log(item)
//           const searchName = item.props.name.toLowerCase();
//           return searchName.includes(term);
//       });
//   };
  
//   const onSubmitForm = (e) => {
//       e.preventDefault();
//       setFilteredComponents(filter(props.products, query))
//       } 

//   return (
//       <div className="searchbar">
//           <form className = 'searchform' onSubmit={onSubmitForm}>
//               <input placeholder="Search for..." onChange={onInputChange} value={query} />
//               <input className="submit" type="submit" value="Search" />
//           </form>

//       {/* {filteredComponents} */}

//       {filteredComponents.map((product) => (
          
//           <span key={product.props.id}>

//               <Link to = {{ pathname:`/products/${product.props.id}`}}>
//                   <h4>{product.props.name}</h4>
//               </Link>
//               <h2>Search Results for {query}</h2>

//               <img 
//                   width="200"
//                   alt={`Product name: ${product.props.name}`}
//                   src={product.props.image_url}
//               />
//           </span>
//       ))}
//           {/* <SearchPage searchComponents = {searchComponents} /> */}
//       </div>
//   );
// }

// export default withRouter(SearchBar);

