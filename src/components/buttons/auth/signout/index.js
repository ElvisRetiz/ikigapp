import React from 'react';
import { useFirebaseApp } from 'reactfire';

const SignOutButton = ({handleUser}) => {

  const firebase = useFirebaseApp();

  const handleSignOut = async () => {
    handleUser();
    await firebase.auth().signOut();
  }

  return (
    <div>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  )
};

export default SignOutButton