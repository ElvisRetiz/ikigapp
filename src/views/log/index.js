import React, {useState} from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

const Log = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebaseApp();
  const firebaseUser = useUser()

  const handleSignUp = async () => {
    await firebase.auth().createUserWithEmailAndPassword(user, password);
  }

  const handleSignIn = async () => {
    await firebase.auth().signInWithEmailAndPassword(user, password);
  }

  const handleSignOut = async () => {
    await firebase.auth().signOut();
  }

  return (
    <> 
      {
        !firebaseUser &&
        <div>
          <p>Usuario:</p>
          <input type="text" onChange={(ev) => setUser(ev.target.value)}/>
          <p>Contraseña:</p>
          <input type="password" onChange={(ev) => setPassword(ev.target.value)}/>
          <button onClick={handleSignIn}>Sign in</button>
          <button onClick={handleSignUp}>Sign up</button>
        </div>
      }
      {
        firebaseUser && <button onClick={handleSignOut}>Logout</button>
      }
    </>
  )
}

export default Log