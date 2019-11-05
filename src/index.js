import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/AppContainer";
import AddToFavoriteContainer from "./containers/AddToFavoriteContainer";
import FavoriteListContainer from "./containers/FavoriteListContainer";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <AddToFavoriteContainer />
    <FavoriteListContainer />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
