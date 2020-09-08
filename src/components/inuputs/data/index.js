import React from 'react';
import './main.css';

import userDataLogo from '../../../assets/images/user-icon.svg';

const UserDataInput = ( { setDataUser } ) => {

  return (
    <div className="data-input">
      <label className="data-input-img" htmlFor="data-input">
        <img  src={userDataLogo} alt="user"/>
      </label>
      <input id="data-input" className="data-input-field" type="text" onChange={(ev) => setDataUser(ev.target.value)} placeholder="¿Como te dicen en la zona?"/>
    </div>
  )

};

export default UserDataInput