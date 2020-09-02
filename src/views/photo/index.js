import React from 'react';
import { useHistory } from "react-router-dom";

import './main.css';

import FacebookShareButton from '../../components/buttons/share/facebook/index.js';
import TwitterShareButton from '../../components/buttons/share/twitter/index.js';

const PhotoView = () => {
  
  const history = useHistory();

return (
    <div className="photo-view-container">
      <h1>{history.location.state.retoNombre}</h1>
      <div className="photo-view-image-container">
        <img src={history.location.state.photo} alt="photos"/>
      </div>
      <div className="photo-view-hashtags">
        <p>#{history.location.state.eventoNombre}</p>
        <p>#{history.location.state.retoNombre.replace(/ /g, "")}</p>
      </div>
      <div className="photo-view-share-buttons">
        <FacebookShareButton element={history.location.state.photo} hashtags={[`#${history.location.state.eventoNombre}`,`#${history.location.state.retoNombre.replace(/ /g, "")}`]}/>
        <TwitterShareButton element={history.location.state.photo} hashtags={[`${history.location.state.eventoNombre}`,`${history.location.state.retoNombre.replace(/ /g, "")}`]} />
      </div>
    </div>
    )
};

export default PhotoView;