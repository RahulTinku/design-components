import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@livingdesign/bogle/dist/Bogle.css";
import "@walmart-web/livingdesign-components/index.esm.css";
import {LivingDesignProvider} from "@walmart-web/livingdesign-components";
ReactDOM.render(
  <React.StrictMode>
    <LivingDesignProvider><App /></LivingDesignProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
