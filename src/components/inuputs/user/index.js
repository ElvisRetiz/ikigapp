import React from 'react';
import './main.css';

import userLogo from '../../../assets/images/mail_outline.svg';

const UserInput = ( { setUser } ) => {

  return (
    <div className="log-input">
      <label className="log-input-img" htmlFor="user-input">
        <img  src={userLogo} alt="@"/>
      </label>
      <input id="user-input" className="log-input-field" type="text" onChange={(ev) => setUser(ev.target.value)} placeholder="Email"/>
    </div>
  )

};

export default UserInput