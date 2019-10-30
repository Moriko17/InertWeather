import * as types from "./actionTypes";

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

export const addCity = cityName => {
  return {
    type: types.ADD_FAVORITE_CITY,
    payload: { cityName }
  };
};
