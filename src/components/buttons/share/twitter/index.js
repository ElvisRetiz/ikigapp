import React from 'react';

import './main.css';
import twLogo from '../../../../assets/images/twitter.png';

const TwitterShareButton = ({element, hashtags}) => {

  return (
    <a  
      className="share-button-tw"
      href={`https://twitter.com/intent/tweet?text=IkigApp&url=${element}&hashtags=${hashtags}`} 
      // data-url={element}
      // data-hashtags= {hashtags}
    >
      <span>Compartir en</span>
      <img src={twLogo} alt="Twitter" className="share-button-tw-logo"/>
    </a>
  )

};

export default TwitterShareButton;
