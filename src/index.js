import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppWithRedux } from "./containers/App";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <AppWithRedux />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
