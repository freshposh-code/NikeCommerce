import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/Store.js";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </Provider>
);
