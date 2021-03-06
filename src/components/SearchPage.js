import React from "react";
import { withRouter , Link} from 'react-router-dom';
import './SearchPage.css'

const SearchPage = (props) => {

console.log(props.filteredComponents)
if(props.filteredComponents === []) {
    return "Sorry, no results found"
}


    return (
        <div className = "products-result-page">
            {/* <h2>Search Results for {props.query}</h2> */}


            {props.filteredComponents.map((product) => (
                
                <span key={product.props.id}>
                    
                    <Link to = {{ pathname:`/products/${product.props.id}`}}>
                        <h4>{product.props.name}</h4>
                    </Link>

                </span>
            ))}
        </div>
    )
}

export default SearchPage;