import { connect } from "react-redux";
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFail,
  deleteCity
} from "../store/actions/actions";
import axios from "axios";
import FavoriteList from "../components/FavoriteList/FavoriteList";

export const fetchWeather = (cityName, id) => {
  return dispatch => {
    const ROOT_URL = "http://localhost:3030/weather";
    const promise = axios({
      url: `${ROOT_URL}?city=${cityName}`,
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

export const deleteCityOnSrv = cityName => {
  const ROOT_URL = "http://localhost:3030/favorites";
  try {
    axios({
      url: `${ROOT_URL}`,
      method: "delete",
      data: {
        cityName: cityName
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const mapStateToProps = state => ({
  favoriteData: state.favoriteWeather,
  deleteCityOnSrv: cityName => deleteCityOnSrv(cityName)
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: (cityName, id) => dispatch(fetchWeather(cityName, id)),
  deleteCity: id => dispatch(deleteCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
