import React, { useEffect, useState } from 'react';
import 'firebase/storage';
import { useFirebaseApp } from 'reactfire';
import ReactImageMosaic from 'react-image-mosaic';

import './main.css';

import Spinner from '../../components/spinner/index.js';

import photoLogo from '../../assets/images/LOGO IKG PNG.png';

const Collage = () => {

  const [photos, setPhotos] = useState([]);

  const firebase = useFirebaseApp();
  const storageRef = firebase.storage().ref();
  const listRef = storageRef.child('/MeMySelfie&Ikiga');

  let photosList = [];

  useEffect(() => {

    const getLinksPhotos = async () => {

      let res = await listRef.listAll();

      for (let i = 0; i < res.items.length; i++) {
        const link = await res.items[i].getDownloadURL();
        photosList.push(link)
      }

      console.log("Photo List: ",photosList);
      setPhotos(photosList);

    };

    getLinksPhotos();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(photos);
  return (
    <div>
      {
        photos.length === 0 && 
          <Spinner />
      }
      {
        photos.length !== 0 &&
          // photos.map((p, index) => <img key={index} src={p} alt="foto"/>)
          <ReactImageMosaic 
            width={ 400 }
            height={ 400 }
            colorBlending={0.6}
            sources={photos}
            target={photoLogo}
          />
      }
      <p>Vista Collage</p>
    </div>
  )
};

export default Collage;
