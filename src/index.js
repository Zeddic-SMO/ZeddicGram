import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalContext from "./context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <Router>
        <App />
      </Router>
    </GlobalContext>
  </React.StrictMode>
);
