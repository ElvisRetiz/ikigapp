import React from 'react';
import { useHistory } from "react-router-dom";

const PhotoView = () => {
  const history = useHistory();
return (
    <div>
      <h1>Ola</h1>
      <img src={history.location.state.photo} alt="photos" />
    </div>
    )
};

export default PhotoView;