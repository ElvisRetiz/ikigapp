import React from 'react';
import { useFirebaseApp } from 'reactfire';
import {
  useHistory,
  useLocation
} from "react-router-dom";

import './main.css';

const SignInButton = ({user, password}) => {

  const firebase = useFirebaseApp();
  let history = useHistory();
  let location = useLocation();

  const handleSignIn = async () => {
    await firebase.auth().signInWithEmailAndPassword(user, password);
    let { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
  }

  return (
    <button className="log-btn-signin" onClick={handleSignIn}>Iniciar sesión</button>
  )

};

export default SignInButton;