import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppWithRedux } from "./containers/App";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import FavoriteManager, { FWR } from "./containers/FavoriteManager";

ReactDOM.render(
  <Provider store={store}>
    <AppWithRedux />
    <FWR />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
