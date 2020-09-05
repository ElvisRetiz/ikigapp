import React from 'react';

import ReactImageMosaic from 'react-image-mosaic';

import './main.css';

import photoLogo from '../../assets/images/LOGO IKG PNG.png';

// import Spinner from '../../components/spinner/index.js';

const Collage = () => {
  return (
    <div>
      <ReactImageMosaic 
        width={ 400 }
        height={ 400 }
        colorBlending={0.5}
        sources={[photoLogo,photoLogo,photoLogo]}
        target={'https://firebasestorage.googleapis.com/v0/b/ikigapp-1c61c.appspot.com/o/MeMySelfie%26Ikiga%2FLOGO%20IKG%20PNG.png?alt=media&token=10f8a2cb-eaf1-47a9-ad47-e88768dc68e4'}
      />
      <p>Vista Collage</p>
    </div>
  )
};

export default Collage;
