import React from 'react';
import { useFirebaseApp } from 'reactfire';

import './main.css';

const ResetButton = ({user, setError, setSucces}) => {

  const firebase = useFirebaseApp();

  const handleReset = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(user);
      setSucces({
        message: 'El correo se ha enviado satisfactoriamente. Si no lo ves en tu bandeja de entrada revisa la carpeta "spam" o "no deseados".'
      })
    } catch (error) {
      setError(error);
    }
  }

  return (
    <button className="log-btn-reset" onClick={handleReset}>Enviar email de restablecimiento</button>
  )

};

export default ResetButton;