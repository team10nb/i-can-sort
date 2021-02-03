
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* {<App />} */}
    {<Routers />}
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
