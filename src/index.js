import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from "./App";
import { store } from './_helpers';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/font-awesome/css/font-awesome.css";
import "./assets/scss/style.scss";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
    <Provider store={store}>
		<App />
	</Provider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
