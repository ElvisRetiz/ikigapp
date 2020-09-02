import React from 'react';

import './main.css';
import fbLogo from '../../../../assets/images/facebook.png'

const FacebookShareButton = ({element, hashtags}) => {

  const share = () => {
    if (!window.FB) {
      return;
    }

    window.FB.ui({
      method: 'share',
      href: element,
      hashtag: hashtags
    }, function(response){console.log(response);})
  }

  return (
    <button onClick={share} className="share-button-fb">
      <span>
        Compartir en
      </span>
      <img src={fbLogo} alt="facebook" className="share-button-fb-logo"/>
    </button>
  )
}

export default FacebookShareButton