import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import './SearchResult.css'

const SearchResult = (props) => {

  return (
    <div>
      <section>
        <h3>{props.name}</h3>
        {/* <button className="add-to-library" onClick={onSelectAdd}> Add Video To Libray </button> */}
      </section> 
    </div>
  )
}

export default SearchResult;