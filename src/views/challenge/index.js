import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import { useFirebaseApp, useUser } from 'reactfire';
import { useParams } from 'react-router-dom';

import './main.css';

import Spinner from '../../components/spinner/index.js';
import CameraButton from '../../components/inuputs/photo/index.js';
import GalleryButton from '../../components/inuputs/gallery/index.js';

const ChallengeList = () => {
  const { id } = useParams();
  const [retos, setRetos] = useState([]);
  const [retosCumplidos, setRetosCumplidos] = useState([]);
  const [evento, setEvento] = useState("");
  const [cargando, setCargando] = useState(false);
  
  const firebase = useFirebaseApp();
  const firebaseUser = useUser() || { email: "" };
  const usuarioRef = firebase.firestore().collection('usuarios').doc(firebaseUser.email || "");
  const retosRef = firebase.firestore().collection('retos').where('evento', '==', id).orderBy('orden');
  const eventoRef = firebase.firestore().collection('eventos').doc(id);

  const challenges = [];

  useEffect(() => {
    usuarioRef
      .get()
      .then(doc => {
        setRetosCumplidos(doc.data().retos)
      })
      .catch(err => {
        console.log(err);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    eventoRef
      .get()
      .then(doc => {
        setEvento(doc.data());
      })
      .catch(err => {
        console.log(err);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    retosRef
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let newDoc = {
            ...doc.data(),
            id: doc.id
          }
          challenges.push(newDoc)
        })
        setRetos(challenges)
        setCargando(true)
      })
      .catch(err => {
        console.log(err);
      })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

return (
  <div className="challenge-container">
    <div className="challenge-head">
      <h4>{evento.nombre}</h4>
    </div>
    <div className="challenge-body">
      {
        cargando &&
          retos.map(reto =>
            reto.activo 
              ?
              retosCumplidos.includes(reto.id) 
                ?
                <div key={reto.id} className="challenge-body-card check">
                  <div className="challenge-body-card-link">
                    <small>{reto.fecha}</small>
                  </div>
                  <p><strong>{reto.nombre}</strong></p>
                  <small>¡LO LOGRASTE, FELICIDADES!</small>
                </div>
                :
                <div key={reto.id} className="challenge-body-card">
                  <div className="challenge-body-card-link">
                    <small>{reto.fecha}</small>
                  </div>
                  <p><strong>{reto.nombre}</strong></p>
                  <p>{reto.descripcion}</p>
                  <div className="challenge-body-share-buttons">
                    <CameraButton retoNombre={reto.nombre} setCargando={setCargando} retoID={reto.id}/>
                    <GalleryButton retoNombre={reto.nombre} setCargando={setCargando} retoID={reto.id}/>
                  </div>
                </div>
              :
              <div key={reto.id} className="challenge-body-card disable">
                <div className="challenge-body-card-link">
                  <small>{reto.fecha}</small>
                </div>
                <p><strong>{reto.nombre}</strong></p>
              </div>    
        )
      }
      {
        !cargando &&
          <Spinner />
      }
    </div>
  </div>
  )
};

export default ChallengeList;