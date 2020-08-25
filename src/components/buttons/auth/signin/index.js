import React from 'react';
import { useFirebaseApp } from 'reactfire';
import './main.css';

const SignInButton = ({user, password}) => {

  const firebase = useFirebaseApp();

  const handleSignIn = async () => {
    console.log(user, password);
    await firebase.auth().signInWithEmailAndPassword(user, password);
  }

  return (
    <button className="log-btn-signin" onClick={handleSignIn}>Sign in</button>
  )


};

export default SignInButton;