import React from 'react';
import { useFirebaseApp } from 'reactfire';
import './main.css';

const SignUpButton = ({user, password}) => {

  const firebase = useFirebaseApp();

  const handleSignUp = async () => {
    await firebase.auth().createUserWithEmailAndPassword(user, password);
  }

  return (
    <button className="log-btn-signup" onClick={handleSignUp}>Sign up</button>
  )

};

export default SignUpButton;