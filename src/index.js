import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App.js';
import firebaseConfig from './firebase-config.js';
import {
  FirebaseAppProvider
} from 'reactfire';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando la app...'}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);
