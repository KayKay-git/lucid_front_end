import React from "react"
import {useState} from 'react';
import { Link } from 'react-router-dom';
import  SearchBar  from './Searchbar';
import Search from './Search'
import Login from './Login'
import Logout from './Logout'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Header.css'

import GoogleLoginButton from './GoogleLoginButton'
import GoogleLogoutButton from './GoogleLogoutButton'
import { useGoogleAuth } from "./GoogleAuth";

const Header = () => {
    
    const { isSignedIn } = useGoogleAuth();
    const { signOut } = useGoogleAuth();
    const { signIn } = useGoogleAuth();

    return (
        <div className = "navbar-div">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <button type="button"  className="btn draw-border navbar-light  ">
                <Link className= "nav-link " to="/">Lucid</Link>
            </button>
        <ul className="navbar-nav">
            <li className="nav-item ">
                <button type="button"  className= "btn draw-border"><Link className="nav-link" to="/products">products</Link></button>
            </li>
            <li className="nav-item">
                <button type="button"  className= "btn draw-border"><Link className="nav-link" to="/ingredients">ingredients</Link></button>
            </li>
            {/* <li className="nav-item">
                <button className= "btn draw-border"><Link className="nav-link" to="/analyze">analyze</Link></button>
            </li> */}
            {/* <li className="nav-item">
                <button className= "btn draw-border"><Link className="nav-link" to="/profile">Profile</Link></button>
            </li> */}

            {/* <div className = 'google-btn nav-item '> 
                    <Link className="nav-link" to="/profile">user link</Link>
                     {isSignedIn ? <GoogleLogoutButton /> : <GoogleLoginButton /> }
                    
                </div>  */}

            {/* <li className="nav-item">
                <button className= "btn draw-border"><Link className="nav-link" to="/signup">Sign Up</Link></button>
            </li> */}
             {isSignedIn ? 
            <li className="nav-item">
                 <button type="button"  className= "btn draw-border"><Link className="nav-link" to="/profile">User Profile</Link></button>
            </li> : ''}

            {isSignedIn ?
            <li className="nav-item">
                <button  type="button" onClick = {signOut} className= "btn draw-border"><Link className="nav-link" to="/">Logout</Link></button>
            </li> :             
            <li className="nav-item"> 
            <button  type="button"  className= "btn draw-border"><Link className="nav-link" to="/profile">Sign Up</Link></button>
            </li> 
            } 




            {/* <Logout /> 

                <div className = 'google-btn nav-item '> 
                    <Link className="nav-link" to="/profile">user link</Link>
                     {isSignedIn ? <GoogleLogoutButton /> : <GoogleLoginButton /> }
                    
                </div> 

       
            {/* <li className="nav-item">
                <button className= "btn draw-border"><Link className="nav-link" to="/login">Login</Link></button>
            </li> */}
          
        </ul>

    
       

        {/* <SearchBar /> */}
        {/* <Search /> */}
        </nav>

    </div>
    )
}

export default Header; 