import React from 'react';
import {useHistory} from "react-router-dom";
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_API_KEY;

const Logout = () => {

    const history = useHistory();

    const onSuccess = (res) => {
        console.log(`Logout successful`);
        alert('Logout made successfully');
        history.push("/");

    };

    return (
        <div>
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout with Google"
            onLogoutSuccess={onSuccess}
        />
        </div>
    );
}

export default Logout;