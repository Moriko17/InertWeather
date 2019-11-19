import { connect } from "react-redux";
import axios from "axios";
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFail,
  updateState
} from "../store/actions/actions";
import App from "../components/App/App";

const fetchWeather = (dispatch, coord, id) => {
  // const API_KEY = "6f49e4f6bef37c3172dac3cae65a0ae6";
  // const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
  // const promise = axios({
  // url: `${ROOT_URL}&lat=${coord.lat}&lon=${coord.lon}`,
  //   method: "get"
  // });
  const ROOT_URL = "http://localhost:3030/weather/coordinates";
  const promise = axios({
    url: `${ROOT_URL}?lat=${coord.lat}&lon=${coord.lon}`,
    method: "get"
  });
  dispatch(fetchWeatherStart(id));
  return promise
    .then(res => {
      console.log(res);
      dispatch(fetchWeatherSuccess(res.data, id));
      return res.data;
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchWeatherFail(error, id));
      return error;
    });
};

export const fetchWeatherByCoord = () => {
  return dispatch => {
    let coord;
    navigator.geolocation.getCurrentPosition(
      pos => {
        coord = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        };
        fetchWeather(dispatch, coord, 0);
      },
      () => {
        coord = {
          lat: 35.68,
          lon: 139.76
        };
        fetchWeather(dispatch, coord, 0);
      }
    );
  };
};

const mapStateToProps = state => ({
  mainCity: state.mainWeather
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherByCoord: () => dispatch(fetchWeatherByCoord()),
  updateState: newState => dispatch(updateState(newState))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
