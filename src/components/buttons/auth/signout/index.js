import React from 'react';
import { useFirebaseApp } from 'reactfire';

import './main.css'

const SignOutButton = ({handleUser}) => {

  const firebase = useFirebaseApp();

  const handleSignOut = async () => {
    handleUser();
    await firebase.auth().signOut();
  }

  return (
    <div className="container-signout-button">
      <button className="signout-button" onClick={handleSignOut}>Cerrar sesión</button>
    </div>
  )
};

export default SignOutButton