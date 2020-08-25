import React, {useState} from 'react';
import 'firebase/auth';
import { useUser } from 'reactfire';
import './main.css';

import SignInButton from '../../components/buttons/auth/signin/index.js';
import SignOutButton from '../../components/buttons/auth/signout/index.js';
import SignUpButton from '../../components/buttons/auth/signup/index.js';
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
          <UserInput  setUser={setUser} />
          <PasswordInput setPassword={setPassword} />
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