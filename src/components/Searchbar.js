import React, { useEffect, useState } from "react";
import { MDBCol, MDBIcon, MDBFormInline } from "mdbreact";
import './Searchbar.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';


const SearchBar = (props) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchComponents, setSearchComponents] = useState([])

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const SEARCH_URL = `http://localhost:5000/products`
  useEffect(() => {
    axios.get(SEARCH_URL, {
       params: {
           query: searchTerm
       }
       })
       .then((response) => { 
           setSearchResults(response.data);   // update state
       })
       .catch((error) => {
           setErrorMessage(error.message);
       });
   }, []);
   
  const onSubmitForm = (event) => {
    event.preventDefault();

    // on submit, we make a call to the API using the searchTerm entered. 
    // const SEARCH_URL = `http://localhost:5000/products`

        const searchComponents = searchResults.map((product) => {
        return(< SearchResult 
            key={product.id}
            id={product.id}
            name={product.name} 
            description={product.description}
            image_url={product.image_url}
            ingredients={product.ingredients}
        />);
        });
        setSearchComponents(searchComponents)
    } 
  

  return (
    <div className="searchbar">
        <form className = 'searchform' onSubmit={onSubmitForm}>
            <input placeholder="Search for..." onChange={onInputChange} value={searchTerm} />
            <input className="submit" type="submit" value="Submit" />
        </form>
      <section> {searchComponents} </section>
    </div>
  );
}


{/* <MDBCol md="10">
<MDBFormInline className="md-form" onSubmit={onSubmitForm}>
    <input className="form-control form-control-sm ml-3 w-75"
            type="text" 
            placeholder="Search products or ingredients" 
            aria-label="Search" 
            onChange={onInputChange} 
            value={searchTerm} />
    <MDBIcon icon="search" type="submit" value="Submit"/>
</MDBFormInline>
</MDBCol> */}
export default SearchBar;

