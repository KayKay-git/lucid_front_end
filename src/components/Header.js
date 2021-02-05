import React from "react"
import { Link } from 'react-router-dom';
import  SearchBar  from './Searchbar';

const Header = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
        <Link className="navbar-brand" to="/">Lucid</Link>
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/products">products</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/ingredients">ingredients</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/analyze">analyze</Link>
            </li>
            <li className="nav-item-signup">
            <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item-login">
            <Link className="nav-link" to="/login">Login</Link>
            </li>
        </ul>
        <SearchBar />
        </nav>
    </div>
    )
}

export default Header; 