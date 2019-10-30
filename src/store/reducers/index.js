import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { favoriteReducer } from "./favoriteReducer";

const rootReducer = combineReducers({
  mainWeather: weatherReducer,
  favoriteWeather: favoriteReducer
});

export default rootReducer;
