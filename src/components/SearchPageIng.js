import React from "react";
import { withRouter , Link} from 'react-router-dom';
import './SearchPageIng.css'

const SearchPageIng = (props) => {

console.log(props.filteredComponents)
if(props.filteredComponents === []) {
    return "Sorry, no results found"
}


    return (
        <div className = "ingredients-result-page">
            {/* <h2>Search Results for {props.query}</h2> */}


            {props.filteredComponents.map((ingredient) => (
                
                <span key={ingredient.props.id}>
                    
                    <Link to = {{ pathname:`/ingredients/${ingredient.props.id}`}}>
                        <h4>{ingredient.props.name}</h4>
                    </Link>

                </span>
            ))}
        </div>
    )
}

export default SearchPageIng;