import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(promise, reduxThunk));

export default store;
