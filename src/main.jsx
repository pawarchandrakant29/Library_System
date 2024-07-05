import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')).render( // Use createRoot from react-dom/client
  <Provider store={store}>
    <App />
  </Provider>
);
