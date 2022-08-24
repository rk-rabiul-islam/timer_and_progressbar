import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';

// import $ from "jquery"
import "jquery-ui-dist/jquery-ui"

import App from './App';
import StapContextProviders from './Components/StapControl/providers/StapContextProviders';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <BrowserRouter>
      <StapContextProviders>
        <App/>
      </StapContextProviders>
    </BrowserRouter>
  </React.StrictMode>
);


