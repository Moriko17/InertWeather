import * as types from "./actionTypes";

const API_KEY = "6f49e4f6bef37c3172dac3cae65a0ae6";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

export const fetchWeatherStart = id => {
  return { type: types.FETCH_WEATHER_START, payload: { id } };
};

export const fetchWeatherSuccess = (fetchedData, id) => {
  return {
    type: types.FETCH_WEATHER_SUCCESS,
    payload: { fetchedData, id }
  };
};

export const fetchWeatherFail = (error, id) => {
  return {
    type: types.FETCH_WEATHER_FAIL,
    payload: { errorCode: error, id }
  };
};
