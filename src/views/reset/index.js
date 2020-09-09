import React, { useState } from 'react';
import 'firebase/auth';
import { Link } from "react-router-dom";

import './main.css';
import logoIkiga from '../../assets/images/LOGO IKG PNG.png'

import ModalError from '../../components/modals/error/index.js';
import ModalSucces from '../../components/modals/succes/index.js';
import UserInput from '../../components/inuputs/user/index.js';
import ResetButton from '../../components/buttons/auth/reset';

const Reset = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(null);

  return (
    <div className="log-container"> 
        <div className="log-container-child">
          <div className="log-img-container">
            <img className="log-img" src={logoIkiga} alt="Insignia Ikiga" />
          </div>
          {
            error &&
              <ModalError error={error} setError={setError} />
          }
          {
            succes &&
              <ModalSucces succes={succes} setSucces={setSucces} />
          }
          <p>Por favor ingresa el email con el que te registraste.</p>
          <UserInput  setUser={setUser} />
          <ResetButton user={user} setError={setError} setSucces={setSucces}/>
          <section><small>¿Ya lo recordaste? <Link to="/login">Inicia sesion aqui.</Link></small></section>
        </div>
    </div>
  )
}

export default Reset;