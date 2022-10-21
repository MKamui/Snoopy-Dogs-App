
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import axios from "axios";

import "normalize.css";
import "./index.css";

require("dotenv").config();
const { REACT_APP_API } = process.env;
axios.defaults.baseURL = REACT_APP_API

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);