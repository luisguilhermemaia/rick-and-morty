import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Page from "./containers/Page";
import "./style/main.css";
import configureStore from "./store/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById("root")
);
