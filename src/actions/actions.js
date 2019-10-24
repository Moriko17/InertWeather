import axios from "axios";
import * as types from "./actionTypes";

const API_KEY = "6f49e4f6bef37c3172dac3cae65a0ae6";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

function fetchWeatherStart() {
  const action = { type: types.FETCH_WEATHER_START };
  return action;
}

function fetchWeatherSuccess(data) {
  const action = { type: types.FETCH_WEATHER_SUCCESS, payload: data };
  return action;
}

function fetchWeatherFail(error) {
  const action = { type: types.FETCH_WEATHER_FAIL, payload: error };
  return action;
}

function fetchWeatherFavStart(num) {
  const action = { type: types.FETCH_WEATHER_FAV_START, payload: num };
  return action;
}

function fetchWeatherFavSuccess(data, num) {
  const action = {
    type: types.FETCH_WEATHER_FAV_SUCCESS,
    payload: { data, num }
  };
  return action;
}

function fetchWeatherFavFail(error, num) {
  const action = {
    type: types.FETCH_WEATHER_FAV_FAIL,
    payload: { error, num }
  };
  return action;
}

function deleteCity(num) {
  const action = { type: types.DELETE_FAV_CITY, payload: num };
  return action;
}

export function fetchWeather(city, num) {
  const promise = axios({
    url: `${ROOT_URL}&q=${city}`,
    method: "get"
  });
  return function(dispatch) {
    dispatch(fetchWeatherFavStart(num));
    return promise
      .then(res => {
        dispatch(fetchWeatherFavSuccess(res.data, num));
        return res;
      })
      .catch(error => {
        dispatch(fetchWeatherFavFail(error, num));
        return error;
      });
  };
}

export function fetchWeatherByCoord(lat, lon) {
  const promise = axios({
    url: `${ROOT_URL}&lat=${lat}&lon=${lon}`,
    method: "get"
  });
  return function(dispatch) {
    dispatch(fetchWeatherStart());
    return promise
      .then(res => {
        dispatch(fetchWeatherSuccess(res.data));
        return res;
      })
      .catch(error => {
        dispatch(fetchWeatherFail(error));
        return error;
      });
  };
}

export function deleteFavCity(num) {
  return function(dispatch) {
    dispatch(deleteCity(num));
  };
}
