import axios from "axios";
import * as types from "./actionTypes";

const API_KEY = "6f49e4f6bef37c3172dac3cae65a0ae6";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

function fetchWeatherStart(id) {
  return { type: types.FETCH_WEATHER_START, payload: { id } };
}

function fetchWeatherSuccess(fetchedData, id) {
  return {
    type: types.FETCH_WEATHER_SUCCESS,
    payload: { fetchedData, id }
  };
}

function fetchWeatherFail(error, id) {
  return {
    type: types.FETCH_WEATHER_FAIL,
    payload: { errorCode: error, id }
  };
}

export function fetchWeatherByCoord(coord, id) {
  const promise = axios({
    url: `${ROOT_URL}&lat=${coord.lat}&lon=${coord.lon}`,
    method: "get"
  });
  return function(dispatch) {
    dispatch(fetchWeatherStart(id));
    return promise
      .then(res => {
        dispatch(fetchWeatherSuccess(res.data, id));
        return res;
      })
      .catch(error => {
        dispatch(fetchWeatherFail(error, id));
        return error;
      });
  };
}
