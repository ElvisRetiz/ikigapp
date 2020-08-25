import React from 'react';
import './main.css';

import passwordLogo from '../../../assets/images/vpn_key.svg';

const PasswordInput = ( { setPassword } ) => {

  return (
    <div className="log-input">
      <label className="log-input-img" htmlFor="password-input">
        <img  src={passwordLogo} alt="*"/>
      </label>
      <input id="password-input" className="log-input-field" type="password" onChange={(ev) => setPassword(ev.target.value)} placeholder="Password"/>
    </div>
  )

};

export default PasswordInput;