import React, { useEffect, useState } from "react";
import { MDBCol, MDBIcon, MDBFormInline, MDBInput } from "mdbreact";
import './Searchbar.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';
import { withRouter , Link} from 'react-router-dom';
import SearchPage from './SearchPage';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom'

const SearchProducts = (props) => {
    console.log(props.products)

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
    
    // const onSubmitForm = (e) => {
    //     e.preventDefault();
    //     setFilteredComponents(filter(props.products, query))
    //     // props.onFilteredProdCallback(filteredComponents)
    //     } 
        const handleKeyPress = (e) => {
            if(e.key === 'Enter'){
                e.preventDefault();
                setFilteredComponents(filter(props.products, query))
              console.log('enter press here! ')
            }
          }
console.log(filteredComponents)
        // const handleClick = () =>{ 
        //     history('./SearchPage')

        // }
// let isFiltered;
//         if (filteredComponents === [] ) {
//             isFiltered = false 
//         } else {
//             isFiltered = true 
//         }

    return (
        <MDBCol md="6">
        <div className="active-pink-3 active-pink-4 mb-4 " >
        <form className = 'searchform' onKeyPress={handleKeyPress} >
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={onInputChange} value={query}/> 
          {/* <input className="submit" type="submit" value="Search" /> */}
    </form>

          <SearchPage query = {query} filteredComponents = {filteredComponents}/>

        </div>
      </MDBCol>

        // <div className="searchbar">
        //     <form className = 'searchform' onSubmit={onSubmitForm} >
        //         <input placeholder="Search for..." onChange={onInputChange} value={query} />
        //         <input className="submit" type="submit" value="Search" />
        //     </form>
        //     {/* {isFiltered ? <SearchPage query = {query} filteredComponents = {filteredComponents}/> : setFilteredComponents([])} */}

        //     {/* <Redirect to= {{pathname: './SearchPage', query:{query}, filteredComponents: {filteredComponents} }} /> */}
        //     <SearchPage query = {query} filteredComponents = {filteredComponents}/>
        // </div>
    );

}
export default withRouter(SearchProducts);