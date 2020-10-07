import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import { useFirebaseApp, useUser } from 'reactfire';
import { Link } from "react-router-dom";

import './main.css';

import Spinner from '../../components/spinner/index.js';

const Home = () => {
  
  const [eventos, setEventos] = useState([]);
  let firebaseUser = useUser() || "";
  const firebase = useFirebaseApp();
  const eventsRef = firebase.firestore().collection('eventos');

  const documents = []

  useEffect(() => {
    eventsRef
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let newDoc = {
            ...doc.data(),
            id: doc.id
          }
          documents.push(newDoc)
        })
        setEventos(documents)
      })
      .catch(err => {
        console.log(err);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="home-container">
      <div className="home-head">
        <h1>Bienvenido a IkigApp</h1>
        <p>La plataforma digital de la zona.</p>
      </div>
      <div className="home-body">
        <p>Hola {firebaseUser.displayName}</p>
        <p>Selecciona el reto en el que deseas participar.</p>
        { 
          eventos.length !== 0 &&
            eventos.map(evento =>
              <div className="home-body-card" key={evento.id}>
                <Link to={`/event/${evento.id}`}>
                  <h4>{evento.nombre}</h4>
                  <p>{evento.descripcion}</p>
                  <div className="home-body-card-link">
                    <small>Ir al evento &gt;</small>
                  </div>
                </Link>
              </div>
            )
        }
        {
          eventos.length === 0 &&
          <Spinner />
        }
      </div>
    </div>
  )
};

export default Home;
