import * as actions from "../actions/actionTypes";

export const initialState = {
  mainCity: { id: 0 }
};

export function weatherReducer(state = initialState.mainCity, action) {
  switch (action.type) {
    case actions.FETCH_WEATHER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ""
      };
    case actions.FETCH_WEATHER_SUCCESS: {
      const fetchedData = {
        cityName: action.payload.fetchedData.name,
        temp: action.payload.fetchedData.main.temp,
        wind: action.payload.fetchedData.wind.speed,
        cloudState: action.payload.fetchedData.weather[0].description,
        pressure: action.payload.fetchedData.main.pressure,
        humidity: action.payload.fetchedData.main.humidity,
        coord: [
          action.payload.fetchedData.coord.lat,
          action.payload.fetchedData.coord.lon
        ]
      };
      return {
        ...state,
        isLoading: false,
        fetchedData: fetchedData
      };
    }
    case actions.FETCH_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorCode
      };
    default:
      return state;
  }
}

export const getMainCity = state => state;
