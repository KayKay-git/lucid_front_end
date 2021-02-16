
import React from 'react';
import {useHistory} from "react-router-dom";
// import {useState} from 'react';
// import { GoogleLogin } from 'react-google-login';
// import './Login.css'
// // import GoogleButton from 'react-google-button'
// import Logout from './Logout'
// // refresh token
// import { refreshTokenSetup } from './refreshToken';
// import axios from 'axios';
import { useGoogleAuth } from "./GoogleAuth";
import GoogleLoginButton from './GoogleLoginButton'
import GoogleLogoutButton from './GoogleLogoutButton'

// const { REACT_APP_API_KEY } = process.env;
// const clientId = REACT_APP_API_KEY;

const Login = (props) => {
    const { isSignedIn } = useGoogleAuth();

//     const [user, setUser] = useState('')
//     const [errorMessage, setErrorMessage] = useState('')
    
//     const history = useHistory();

//     const onSuccess = (res) => {
//         console.log('Login Success: currentUser:', res.profileObj);
//         alert(
//         `Logged in successfully. Welcome, ${res.profileObj.name}`
//         );
        
//         const newUserData = {
//             "id_token": res.profileObj.googleId, 
//             "username": res.profileObj.name, 
//             "first_name": res.profileObj.givenName,
//             "last_name": res.profileObj.familyName, 
//             "email": res.profileObj.email, 
//             "image_url": res.profileObj.imageUrl
//         }

//         // const newUserData = {
//         //     "id_token": "n", 
//         //     "username": "n", 
//         //     "first_name": "n",
//         //     "last_name": "n", 
//         //     "email": "b", 
//         //     "image_url": "b"
//         // }

// console.log(newUserData)
//         axios.post('http://localhost:5000/users', newUserData)
//         .then((response) => {
//             console.log('hey')
//             console.log(response.data)
//                 setUser(response.data);
            
//         })
//         .catch((error) => {
//             setErrorMessage(error.message);
//         });

//     console.log(user)

//         history.push("/profile");
//         refreshTokenSetup(res);
//     };

    // const onFailure = (res) => {
    //     console.log('Login failed: res:', res);
    //     alert(
    //     `Failed to login user ${res.profileObj.name}. Please Try Again`
    //     );
    // };

    return (
        <div>     
         <h3>Log In Page</h3>      

            {isSignedIn ? <GoogleLogoutButton /> : <GoogleLoginButton /> }
        </div>  

    );
}

export default Login;