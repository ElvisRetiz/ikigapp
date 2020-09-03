import React from 'react';
import { useFirebaseApp } from 'reactfire';
import {
  useHistory,
  useLocation
} from "react-router-dom";

import './main.css';

const SignUpButton = ({user, password, setError}) => {

  const firebase = useFirebaseApp();
  let history = useHistory();
  let location = useLocation();

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(user, password);
      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <button className="log-btn-signup" onClick={handleSignUp}>Registrarme</button>
  )

};

export default SignUpButton;