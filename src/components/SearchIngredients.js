import React, { useEffect, useState } from "react";
import { MDBCol, MDBIcon, MDBFormInline, MDBInput } from "mdbreact";
import './Searchbar.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';
import { withRouter , Link} from 'react-router-dom';
import SearchPageIng from './SearchPageIng';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom'

const Searchingredients = (props) => {
    console.log(props.ingredients)

    const [query, setQuery] = useState('')
    const [filteredComponents, setFilteredComponents] = useState([])
    // const history = useHistory();


    const onInputChange = (event) => {
        setQuery(event.target.value);
    }

    const filter = (data, term) => {
        if (!term) {
            return data;
        }
    
        return data.filter((item) => {
            console.log(item)
            const searchName = item.props.name.toLowerCase();
            return searchName.includes(term);
        });
    };
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            setFilteredComponents(filter(props.ingredients, query))
            console.log('enter press here! ')
        }
    }
console.log(filteredComponents)

    return (
        <MDBCol md="6">
        <div className="active-pink-3 active-pink-4 mb-4 " >
        <form className = 'searchform' onKeyPress={handleKeyPress} >
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={onInputChange} value={query}/> 
          {/* <input className="submit" type="submit" value="Search" /> */}
        </form>

        <SearchPageIng query = {query} filteredComponents = {filteredComponents}/>
        </div>
      </MDBCol>

    );

}
export default withRouter(Searchingredients);