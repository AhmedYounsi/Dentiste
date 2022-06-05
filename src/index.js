import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { hydrate, render } from "react-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
  
 
 
 const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}