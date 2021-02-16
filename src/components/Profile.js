import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link,  useParams } from 'react-router-dom';
// import Lucid from './Lucid'
import { useGoogleLogin } from 'react-use-googlelogin';
import { useGoogleAuth } from "./GoogleAuth";
import GoogleLoginButton from './GoogleLoginButton'
import './Profile.css'
const Profile = () => {
    const { signIn, signOut, googleUser, isSignedIn } = useGoogleAuth()

    return (
        <div style={{ padding: '1rem' }}  className = "main-div">

        {isSignedIn ? 
            <h1 className ="profile-header"> WELCOME BACK! </h1> : <div className ="profile-header"> <h1>Please Log In or Sign Up</h1> <GoogleLoginButton /> </div>
        }

        {isSignedIn && (
            <div className = "user-profile">
            <h1>{googleUser.profileObj.name}</h1>
            <img src={googleUser.profileObj.imageUrl} alt="Avatar." />
            </div>
        )}

        {/* <button onClick={() => signIn()} style={{ marginRight: '1rem' }}>
            Sign in
        </button>
        <button onClick={signOut}>Sign Out</button> */}
      </div>
    )
};

export default Profile;


