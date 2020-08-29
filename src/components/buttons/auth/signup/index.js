import React from 'react';
import { useFirebaseApp } from 'reactfire';
import {
  useHistory,
  useLocation
} from "react-router-dom";

import './main.css';

const SignUpButton = ({user, password}) => {

  const firebase = useFirebaseApp();
  let history = useHistory();
  let location = useLocation();

  const handleSignUp = async () => {
    await firebase.auth().createUserWithEmailAndPassword(user, password);
    let { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
  }

  return (
    <button className="log-btn-signup" onClick={handleSignUp}>Registrarme</button>
  )

};

export default SignUpButton;