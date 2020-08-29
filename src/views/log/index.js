import React, { useState } from 'react';
import 'firebase/auth';
import { useUser } from 'reactfire';
import { Link } from "react-router-dom";

import './main.css';
import logoIkiga from '../../assets/images/LOGO IKG PNG.png'

import SignInButton from '../../components/buttons/auth/signin/index.js';
import SignOutButton from '../../components/buttons/auth/signout/index.js';
import UserInput from '../../components/inuputs/user/index.js';
import PasswordInput from '../../components/inuputs/password/index.js';

const Log = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const firebaseUser = useUser();

  const handleUser = () => {
    setUser("");
    setPassword("");
  };

  return (
    <div className="log-container"> 
      {
        !firebaseUser &&
        <div className="log-container-child">
          <div className="log-img-container">
            <img className="log-img" src={logoIkiga} alt="Insignia Ikiga" />
          </div>
          <UserInput  setUser={setUser} />
          <PasswordInput setPassword={setPassword} />
          <SignInButton user={user} password={password} />
          <section>¿No tienes cuenta? <Link to="/register">Registrate aqui.</Link></section>
        </div>
      }
      {
        firebaseUser && <SignOutButton handleUser={handleUser} />
      }
    </div>
  )
}

export default Log