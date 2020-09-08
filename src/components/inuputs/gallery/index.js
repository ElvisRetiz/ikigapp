import React from 'react';
import 'firebase/firestore';
import 'firebase/storage';
import { useFirebaseApp, useUser, useFirestore } from 'reactfire';
import { useHistory } from "react-router-dom";

import './main.css';

const GalleryButton = ({retoNombre, setCargando, retoID}) => {

  const history = useHistory();
  const firebase = useFirebaseApp();
  const firestore = useFirestore();
  const firebaseUser = useUser();
  const inputRef = React.createRef();

  const handleUpload = () => {
    setCargando(false);
    const usuarioRef = firebase.firestore().collection('usuarios').doc(firebaseUser.email);
    const storageRef = firebase.storage().ref(`/MeMySelfie&Ikiga/${inputRef.current.files[0].name}`);
    const task = storageRef.put(inputRef.current.files[0]);

    task.on('state_changed', snapshot => {
    }, error => {
      console.log(error);
    }, async () => {
      const downloadedURL = await task.snapshot.ref.getDownloadURL();
      await usuarioRef.update({
        retos: firestore.FieldValue.arrayUnion(retoID)
      })
      history.push('/photo',{photo: downloadedURL, retoNombre, eventoNombre: "MeMySelfieAndIkiga"});
    })
  };

  return (
    <div className="challenge-body-card-link">
      <label className="gallery-label-button" htmlFor="btn-gallery"><small>Subir foto</small></label>
      <input 
      ref={inputRef} 
      id="btn-gallery" 
      type="file" 
      accept="image/*" 
      className="gallery-button" 
      onChange={handleUpload}
    />
    </div>
  )
};

export default GalleryButton;