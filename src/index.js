import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM instead of react-dom/client
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import "./index.css";

ReactDOM.render( // Use ReactDOM.render instead of ReactDOM.createRoot
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

