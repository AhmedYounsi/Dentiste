/* eslint-disable */
import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from 'react-dom';

import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </>
// );

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  ReactDOM.render(
    <BrowserRouter>
  <App />
    </BrowserRouter>,
    rootElement
  );
}
