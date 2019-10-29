import * as actions from "../actions/actionTypes";

export const initialState = {
  data: {
    mainCityData: {},
    favoriteCitiesData: {},
    lastIndex: 0
  },
  isLoading: false,
  errorMessage: "",
  isFavoriteLoading: {},
  favErrorMessage: ""
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
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    case actions.FETCH_WEATHER_FAV_START: {
      const id = action.payload;
      let favoriteLoading = state.isFavoriteLoading;
      favoriteLoading[id] = true;
      return {
        ...state,
        isFavoriteLoading: favoriteLoading,
        favErrorMessage: ""
      };
    }
    case actions.FETCH_WEATHER_FAV_SUCCESS: {
      const favoriteCityData = {
        cityName: action.payload.data.name,
        temp: action.payload.data.main.temp,
        wind: action.payload.data.wind.speed,
        cloudState: action.payload.data.weather[0].description,
        pressure: action.payload.data.main.pressure,
        humidity: action.payload.data.main.humidity,
        coord: [action.payload.data.coord.lat, action.payload.data.coord.lon]
      };
      let updatedData = state.data;
      const id = action.payload.num;
      updatedData.favoriteCitiesData[id] = favoriteCityData;
      updatedData.lastIndex = updatedData.lastIndex + 1;
      let favoriteLoading = state.isFavoriteLoading;
      favoriteLoading[id] = false;
      return {
        ...state,
        isFavoriteLoading: favoriteLoading,
        data: updatedData
      };
    }
    case actions.FETCH_WEATHER_FAV_FAIL: {
      const id = action.payload.num;
      let favoriteLoading = state.isFavoriteLoading;
      favoriteLoading[id] = false;
      return {
        ...state,
        isFavoriteLoading: favoriteLoading,
        favErrorMessage: action.payload.error
      };
    }
    default:
      return state;
  }
}
