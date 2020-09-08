import React from 'react';

import './main.css';

const WebShareButton = ({element, hashtags, reto}) => {

  const handleShare = () => {
    navigator.share({
      title: 'MeMySelfieAndIkiga',
      text: `¡Pude con el ${reto}! ${hashtags}`,
      url: element
    })
  }

  return (
    <button className="share-button-web" onClick={handleShare}>Compartir...</button>
  )

};

export default WebShareButton;
