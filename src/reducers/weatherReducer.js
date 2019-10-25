import * as actions from "../actions/actionTypes";

export const initialState = {
  data: {
    mainCityData: {},
    favoriteCitiesData: []
  },
  isLoading: false,
  errorMessage: ""
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_WEATHER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ""
      };
    case actions.FETCH_WEATHER_SUCCESS: {
      const mainCityData = {
        cityName: action.payload.name,
        temp: action.payload.main.temp,
        wind: action.payload.wind.speed,
        cloudState: action.payload.weather[0].description,
        pressure: action.payload.main.pressure,
        humidity: action.payload.main.humidity,
        coord: [action.payload.coord.lat, action.payload.coord.lon]
      };
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          mainCityData: (state.data.mainCityData = mainCityData)
        },
        errorMessage: ""
      };
    }
    case actions.FETCH_WEATHER_FAIL:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
