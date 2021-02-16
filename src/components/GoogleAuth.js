import React from 'react'
import GoogleLogin from 'react-google-login'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext() // Not necessary, but recommended.

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_API_KEY, // Your clientID from Google.
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {/* The rest of your app */}
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);

