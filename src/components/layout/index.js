import React from 'react';
import './main.css'

import Navbar from '../navbar/index.js';

const Layout = ({children}) => {
  return (
    <div className="app-container">
      <Navbar />
      {children}
    </div>
  )
};

export default Layout;