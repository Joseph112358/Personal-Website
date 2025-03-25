import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Add your global CSS if necessary

// React 18 syntax for root rendering
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);