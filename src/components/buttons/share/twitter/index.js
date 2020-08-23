import React from 'react';

const TwitterShareButton = () => {

  return (
    <a  
      href="https://twitter.com/intent/tweet?text=Es%20una%20prueba" 
      className="twitter-share-button" 
      data-show-count="false"
      data-url="https://firebasestorage.googleapis.com/v0/b/ikigapp-1c61c.appspot.com/o/MeMySelfie%26Ikiga%2Fcerdo.png?alt=media&token=2c88cbc2-21e8-4319-af21-79f701343154"
      data-hashtags="MeMySelfieAndIkiga"
    >
      Tweet
    </a>
  )

};

export default TwitterShareButton;
