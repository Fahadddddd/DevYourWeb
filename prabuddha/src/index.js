import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Explore from './Explore';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
     <Explore /> 
    <App/>
    </BrowserRouter> */}
    <App/>
  </React.StrictMode>
);



