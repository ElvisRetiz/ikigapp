import React, { useState } from 'react';
import 'firebase/auth';
import { Link } from "react-router-dom";

import './main.css';
import logoIkiga from '../../assets/images/LOGO IKG PNG.png'

import ModalError from '../../components/modals/error/index.js';
import SignInButton from '../../components/buttons/auth/signin/index.js';
import UserInput from '../../components/inuputs/user/index.js';
import PasswordInput from '../../components/inuputs/password/index.js';

const Log = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
          <UserInput  setUser={setUser} />
          <PasswordInput setPassword={setPassword} />
          <SignInButton user={user} password={password} setError={setError}/>
          <section>¿No tienes cuenta? <Link to="/register">Registrate aqui.</Link></section>
        </div>
    </div>
  )
}

export default Log