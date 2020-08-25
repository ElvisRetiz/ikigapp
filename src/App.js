import React from 'react';

import Layout from './components/layout/index.js';
import Log from './views/log/index.js';

function App() {
  return (
    <div className="App">
      <Layout>
        <Log />
      </Layout>
    </div>
  );
}

export default App;
