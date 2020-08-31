import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';
import { Link } from "react-router-dom";

import './main.css';

const Home = () => {
  
  const [eventos, setEventos] = useState([]);
  const firebase = useFirebaseApp();
  const eventsRef = firebase.firestore().collection('eventos');

  const documents = []

  useEffect(() => {
    eventsRef
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, doc.data());
          let newDoc = {
            ...doc.data(),
            id: doc.id
          }
          console.log(newDoc);
          documents.push(newDoc)
        })
        setEventos(documents)
      })
      .catch(err => {
        console.log(err);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="home-container">
      <div className="home-head">
        <h1>Bienvenido a IkigApp</h1>
        <p>La plataforma digital de la zona.</p>
      </div>
      <div className="home-body">
        <p>Selecciona el reto en el que deseas participar.</p>
        { 
          eventos.length !== 0 &&
            eventos.map(evento =>
              <div className="home-body-card" key={evento.id}>
                <Link to={`/${evento.id}`}>
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
          <p>Cargando...</p>
        }
      </div>
    </div>
  )
};

export default Home;
