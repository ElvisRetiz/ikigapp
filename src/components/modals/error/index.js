import React from 'react';

import './main.css';
import LogoError from '../../../assets/images/error.png'

const ModalError = ({error, setError}) => {

  let message = "";

  switch (error.code) {
    case "auth/invalid-email":
      message = "Hay un error con el formato del correo, intente ingresandolo nuevamente.";
      break;
    case "auth/wrong-password":
      message = "Password invalido, intente de nuevo.";
      break;
    default:
      message = "Hay un problema con el inicio de sesion. Intenta de nuevo mas tarde."
      break;
  }

  return (
    <div className="modal-error-container">
      <div className="modal-error-header">
        <img src={LogoError} alt="Logo error" />
        <p>OH NO!</p>
      </div>
      <div className="modal-error-message">
        <p>{message}</p>
        <button onClick={() => setError(null)}>OK</button>
      </div>
    </div>
  )
};

export default ModalError;