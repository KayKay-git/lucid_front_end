import React from 'react';
import { useGoogleAuth } from './GoogleAuth';
import {useHistory} from "react-router-dom";
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_API_KEY;

const GoogleLogoutButton = () => {
    const { signOut } = useGoogleAuth();
    const history = useHistory();

    const onSuccess = (res) => {
        console.log(`Logout successful`);
        alert('Logout made successfully');
        history.push("/");

    };

    return (
        <div onClick={signOut}>        

        <GoogleLogout
            clientId={clientId}
            buttonText="Logout with Google"
            onLogoutSuccess={onSuccess}
        />
        </div>
    );
    // return (
    //     <button onClick={signOut}>Logout</button>
    // );
};

export default GoogleLogoutButton;