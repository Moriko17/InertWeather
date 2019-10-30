import * as actions from "../actions/actionTypes";

export const initialState = {
  favoriteData: {
    cities: [],
    lastUsedId: 0
  }
};

export function favoriteReducer(state = initialState.favoriteData, action) {
  let newFavoriteCities = [];
  switch (action.type) {
    case actions.FETCH_FAVORITE_WEATHER_START:
      newFavoriteCities = state.cities.map(city =>
        city.id === action.payload.id
          ? { ...city, isLoading: true, errorMessage: "" }
          : city
      );
      return {
        ...state,
        cities: newFavoriteCities
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
      newFavoriteCities = state.cities.map(city =>
        city.id === action.payload.id
          ? { ...city, isLoading: false, fetchedData: fetchedData }
          : city
      );
      return {
        ...state,
        cities: newFavoriteCities
      };
    }
    case actions.FETCH_FAVORITE_WEATHER_FAIL:
      newFavoriteCities = state.cities.map(city =>
        city.id === action.payload.id
          ? {
              ...city,
              isLoading: false,
              errorMessage: action.payload.errorCode
            }
          : city
      );
      return {
        ...state,
        cities: newFavoriteCities
      };
    case actions.ADD_FAVORITE_CITY:
      newFavoriteCities = [
        ...state.cities,
        {
          id: state.lastUsedId + 1,
          cityName: action.payload.cityName,
          errorMessage: "",
          isLoading: false
        }
      ];
      return {
        ...state,
        cities: newFavoriteCities,
        lastUsedId: state.lastUsedId + 1
      };
    case actions.DELETE_FAVORITE_CITY:
      newFavoriteCities = state.cities.filter(
        city => city.id !== action.payload.id
      );
      return {
        ...state,
        cities: newFavoriteCities
      };
    default:
      return state;
  }
}
