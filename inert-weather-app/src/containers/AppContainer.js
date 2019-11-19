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
  const ROOT_URL = "http://localhost:3030/weather/coordinates";
  const promise = axios({
    url: `${ROOT_URL}?lat=${coord.lat}&lon=${coord.lon}`,
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
