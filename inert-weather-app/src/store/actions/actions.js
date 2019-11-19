import * as types from "./actionTypes";

export const fetchWeatherStart = id =>
  id === 0
    ? { type: types.FETCH_WEATHER_START, payload: { id } }
    : { type: types.FETCH_FAVORITE_WEATHER_START, payload: { id } };

export const fetchWeatherSuccess = (fetchedData, id) =>
  id === 0
    ? {
        type: types.FETCH_WEATHER_SUCCESS,
        payload: { fetchedData, id }
      }
    : {
        type: types.FETCH_FAVORITE_WEATHER_SUCCESS,
        payload: { fetchedData, id }
      };

export const fetchWeatherFail = (error, id) =>
  id === 0
    ? {
        type: types.FETCH_WEATHER_FAIL,
        payload: { errorCode: error, id }
      }
    : {
        type: types.FETCH_FAVORITE_WEATHER_FAIL,
        payload: { errorCode: error.message, id }
      };

export const addCity = cityName => {
  return {
    type: types.ADD_FAVORITE_CITY,
    payload: { cityName }
  };
};

export const deleteCity = id => {
  return {
    type: types.DELETE_FAVORITE_CITY,
    payload: { id }
  };
};

export const updateState = newState => {
  return {
    type: types.UPDATE_STATE,
    payload: { newState }
  };
};
