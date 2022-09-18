import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import ModalProvider from './Context/Modal/modalContext';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>
);

