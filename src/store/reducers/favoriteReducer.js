import * as actions from "../actions/actionTypes";

export const initialState = {
  favoriteData: {
    cities: [],
    lastUsedId: -1
  }
};

export function favoriteReducer(state = initialState.favoriteData, action) {
  let newFavoriteCities = [];
  switch (action.type) {
    case actions.FETCH_FAVORITE_WEATHER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ""
      };
    case actions.FETCH_FAVORITE_WEATHER_SUCCESS: {
      const fetchedData = {
        cityName: action.payload.fetchedData.name,
        temp: action.payload.fetchedData.main.temp,
        wind: action.payload.fetchedData.wind.speed,
        cloudState: action.payload.fetchedData.weather[0].description,
        pressure: action.payload.fetchedData.main.pressure,
        humidity: action.payload.fetchedData.main.humidity,
        coord: {
          lat: action.payload.fetchedData.coord.lat,
          lon: action.payload.fetchedData.coord.lon
        }
      };
      return {
        ...state,
        isLoading: false,
        fetchedData: fetchedData
      };
    }
    case actions.FETCH_FAVORITE_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorCode
      };
    case actions.ADD_FAVORITE_CITY:
      newFavoriteCities = [
        ...state.cities,
        {
          id: state.lastUsedId + 1,
          cityName: action.payload.cityName
        }
      ];
      return {
        ...state,
        cities: newFavoriteCities,
        lastUsedId: state.lastUsedId + 1
      };
    default:
      return state;
  }
}
