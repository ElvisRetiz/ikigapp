import React from 'react';
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';
import {
  useHistory,
  useLocation
} from "react-router-dom";

import './main.css';

const SignUpButton = ({user, password, dataUser, dataExtraUser, setError}) => {

  const firebase = useFirebaseApp();
  const usersRef = firebase.firestore().collection("usuarios");
  let history = useHistory();
  let location = useLocation();

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(user, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: dataUser
      });
      await usersRef.doc(firebase.auth().currentUser.email).set({
        retos: [],
        grupoYCelula: dataExtraUser
      });
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