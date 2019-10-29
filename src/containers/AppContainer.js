import { connect } from "react-redux";
import axios from "axios";
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFail
} from "../store/actions/actions";
import App from "../components/App";
import "../styles/styles.css";
import { getMainCity } from "../store/reducers/weatherReducer";

const fetchWeather = (dispatch, coord, id) => {
  const API_KEY = "6f49e4f6bef37c3172dac3cae65a0ae6";
  const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
  const promise = axios({
    url: `${ROOT_URL}&lat=${coord.lat}&lon=${coord.lon}`,
    method: "get"
  });
  dispatch(fetchWeatherStart(id));
  return promise
    .then(res => {
      dispatch(fetchWeatherSuccess(res.data, id));
      return res.data;
    })
    .catch(error => {
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
      err => {
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
  mainCity: getMainCity(state.weather)
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherByCoord: () => dispatch(fetchWeatherByCoord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
