import * as actions from "../actions/actionTypes";

export const initialState = {
  data: {},
  fav1Data: {},
  fav2Data: {},
  isLoading: false,
  isFavLoading: false,
  isFav2Loading: false,
  errorMessage1: "",
  errorMessage2: ""
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_WEATHER_SUCCESS:
      const { name, coord, main, weather, wind } = action.payload;
      const obj = {
        name,
        coord,
        main,
        weather,
        wind
      };
      return {
        ...state,
        isLoading: false,
        data: obj,
        errorMessage: ""
      };
    case actions.FETCH_WEATHER_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ""
      };
    case actions.FETCH_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "Cannot find the city you just typed"
      };
    case actions.FETCH_WEATHER_FAV_SUCCESS:
      let fname = action.payload.data.name;
      let fcoord = action.payload.data.coord;
      let fmain = action.payload.data.main;
      let fweather = action.payload.data.weather;
      let fwind = action.payload.data.wind;
      const fobj = {
        fname,
        fcoord,
        fmain,
        fweather,
        fwind
      };
      if (action.payload.num === 0) {
        return {
          ...state,
          isFavLoading: false,
          fav2Data: state.fav1Data.fname ? state.fav1Data : state.fav2Data,
          fav1Data: fobj,
          errorMessage: ""
        };
      } else {
        return {
          ...state,
          isFav2Loading: false,
          fav2Data: fobj,
          errorMessage: ""
        };
      }
    case actions.FETCH_WEATHER_FAV_START:
      if (action.payload === 0) {
        return {
          ...state,
          isFavLoading: true,
          errorMessage: ""
        };
      } else {
        return {
          ...state,
          isFav2Loading: true,
          errorMessage: ""
        };
      }
    case actions.FETCH_WEATHER_FAV_FAIL:
      if (action.payload.num === 0) {
        return {
          ...state,
          isFavLoading: false,
          fav2Data: state.fav1Data,
          fav1Data: {},
          errorMessage1: "Cannot find the city you just typed"
        };
      } else {
        return {
          ...state,
          isFav2Loading: false,
          errorMessage2: "Cannot find the city you just typed"
        };
      }
    case actions.DELETE_FAV_CITY:
      let num = action.payload;
      if (num === 0) {
        return {
          ...state,
          fav1Data: state.fav2Data,
          fav2Data: {}
        };
      } else {
        return {
          ...state,
          fav2Data: {}
        };
      }
    default:
      return state;
  }
}
