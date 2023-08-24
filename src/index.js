import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/style.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
