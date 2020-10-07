import React, { useState } from 'react';
import 'firebase/auth';
import { Link } from "react-router-dom";

import './main.css';
import logoIkiga from '../../assets/images/LOGO IKG PNG.png'

import ModalError from '../../components/modals/error/index.js';
import SignUpButton from '../../components/buttons/auth/signup/index.js';
import UserDataInput from '../../components/inuputs/data/index.js';
import UserDataExtraInput from '../../components/inuputs/data-extra/index.js';
import UserInput from '../../components/inuputs/user/index.js';
import PasswordInput from '../../components/inuputs/password/index.js';

const Register = () => {
  const [dataUser, setDataUser] = useState("");
  const [dataExtraUser, setDataExtraUser] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="log-register-container"> 
      <div className="log-container-child">
        <div className="log-img-container">
          <img className="log-register-img" src={logoIkiga} alt="Insignia Ikiga" />
        </div>
        {
          error &&
            <ModalError error={error} setError={setError} />
        }
        <UserDataInput setDataUser={setDataUser}/>
        <UserDataExtraInput setDataExtraUser={setDataExtraUser} />
        <UserInput  setUser={setUser} />
        <PasswordInput setPassword={setPassword} />
        <SignUpButton user={user} password={password} dataUser={dataUser} dataExtraUser={dataExtraUser} setError={setError}/>
        <small><section>¿Ya tienes cuenta? <Link to="/login">Inicia sesion aqui.</Link></section></small>
      </div>
    </div>
  )
}

export default Register