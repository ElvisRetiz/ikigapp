import React from 'react';
import { useUser } from 'reactfire';
import { Link } from "react-router-dom";

import SignOutButton from '../buttons/auth/signout/index.js';

import './main.css';

const Navbar = () => {

  const firebaseUser = useUser();
  
  const handleUser = () => {
    return
  };

  return (
    <div className="navbar-container">
      <span className="navbar-title">
        <Link to="/">
          IkigApp
        </Link>
      </span>
      {
        firebaseUser &&
        <span className="navbar-menu">
          <SignOutButton handleUser={handleUser} />
        </span>
      }
    </div>
  )
}

export default Navbar;