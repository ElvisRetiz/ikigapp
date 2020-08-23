import React from 'react';

const FacebookShareButton = () => {

  const share = () => {
    if (!window.FB) {
      return;
    }

    window.FB.ui({
      method: 'share',
      href: 'https://firebasestorage.googleapis.com/v0/b/ikigapp-1c61c.appspot.com/o/MeMySelfie%26Ikiga%2Fcerdo.png?alt=media&token=2c88cbc2-21e8-4319-af21-79f701343154',
      hashtag: '#MeMySelfieAndIkiga'
    }, function(response){console.log(response);})
  }

  return (
    <button onClick={share}>
      <div>
        Compartir en fb
      </div>
    </button>
  )
}

export default FacebookShareButton