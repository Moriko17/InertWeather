import { connect } from "react-redux";
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFail
} from "../store/actions/actions";
import axios from "axios";
import Favorite from "../components/Favorite";

export const fetchWeather = (cityName, id) => {
  return dispatch => {
    const API_KEY = "6f49e4f6bef37c3172dac3cae65a0ae6";
    const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
    const promise = axios({
      url: `${ROOT_URL}&q=${cityName}`,
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
};

const mapStateToProps = state => ({
  favoriteData: state.favoriteWeather
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: (cityName, id) => dispatch(fetchWeather(cityName, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
