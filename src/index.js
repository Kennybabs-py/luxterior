import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
//import store here and pass it as prop to provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);
