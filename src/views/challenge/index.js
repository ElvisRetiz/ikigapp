import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';
import { useParams } from 'react-router-dom';

import './main.css';

const ChallengeList = () => {
  const { id } = useParams();
return <div><h1>{id}</h1></div>
};

export default ChallengeList;