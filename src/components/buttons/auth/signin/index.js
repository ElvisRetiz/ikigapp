import React from 'react';
import { useFirebaseApp } from 'reactfire';
import {
  useHistory,
  useLocation
} from "react-router-dom";

import './main.css';

const SignInButton = ({user, password, setError}) => {

  const firebase = useFirebaseApp();
  let history = useHistory();
  let location = useLocation();

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(user, password);
      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <button className="log-btn-signin" onClick={handleSignIn}>Iniciar sesión</button>
  )

};

export default SignInButton;