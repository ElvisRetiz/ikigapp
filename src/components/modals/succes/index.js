import React from 'react';
import {
  useHistory,
  useLocation
} from "react-router-dom";

import './main.css';
import LogoSuccess from '../../../assets/images/success.png'

const ModalSucces = ({succes, setSucces}) => {

  let history = useHistory();
  let location = useLocation();

  const handleClose = () => {
    setSucces(null)
    let { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
  }

  return (
    <div className="modal-success-container">
      <div className="modal-success-header">
        <img src={LogoSuccess} alt="Logo success" />
        <p>¡EXITO!</p>
      </div>
      <div className="modal-success-message">
        <p>{succes.message}</p>
        <button onClick={handleClose}>OK</button>
      </div>
    </div>
  )
};

export default ModalSucces;