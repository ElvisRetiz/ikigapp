import React, {useState} from 'react';
import 'firebase/auth';
import { useUser } from 'reactfire';

import SignInButton from '../../components/buttons/auth/signin/index.js';
import SignOutButton from '../../components/buttons/auth/signout/index.js';
import SignUpButton from '../../components/buttons/auth/signup/index.js';

const Log = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const firebaseUser = useUser();

  const handleUser = () => {
    setUser("");
    setPassword("");
  };

  return (
    <div className="log-conatiner"> 
      {
        !firebaseUser &&
        <div>
          <p>Usuario:</p>
          <input type="text" onChange={(ev) => setUser(ev.target.value)}/>
          <p>Contraseña:</p>
          <input type="password" onChange={(ev) => setPassword(ev.target.value)}/>
          <SignInButton user={user} password={password} />
          <SignUpButton user={user} password={password} />
        </div>
      }
      {
        firebaseUser && <SignOutButton handleUser={handleUser} />
      }
    </div>
  )
}

export default Log