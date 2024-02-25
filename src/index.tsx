import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

document.body.style.minHeight = `${window.innerHeight || 0}px`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
