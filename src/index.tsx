import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: `AIzaSyDGHwfW3pX2f_A7hO5bUhgWdhg1i5Z2Y50`,
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
