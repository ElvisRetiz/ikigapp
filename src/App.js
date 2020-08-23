import React from 'react';
import Log from './views/log/index.js';
import FacebookShareButton from './components/buttons/share/facebook/index.js';
import TwitterShareButton from './components/buttons/share/twitter/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Log />
      <FacebookShareButton />
      <TwitterShareButton />
    </div>
  );
}

export default App;
