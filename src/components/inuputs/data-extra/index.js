import React from 'react';
import './main.css';

import userDataExtraLogo from '../../../assets/images/data-extra-icon.svg';

const UserDataExtraInput = ( { setDataExtraUser } ) => {

  return (
    <div className="data-extra-input">
      <label className="data-extra-input-img" htmlFor="data-extra-input">
        <img  src={userDataExtraLogo} alt="userDataExtra"/>
      </label>
      <input id="data-extra-input" className="data-extra-input-field" type="text" onChange={(ev) => setDataExtraUser(ev.target.value)} placeholder="¿Cual es tu grupo y tu celula?"/>
    </div>
  )

};

export default UserDataExtraInput