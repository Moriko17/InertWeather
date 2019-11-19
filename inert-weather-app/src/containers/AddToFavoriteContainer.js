import axios from "axios";
import { connect } from "react-redux";
import { addCity } from "../store/actions/actions";
import AddToFavorite from "../components/AddToFavorite/AddToFavorite";

export const postCity = cityName => {
  const ROOT_URL = "http://localhost:3030/favorites";
  try {
    axios({
      url: `${ROOT_URL}`,
      method: "post",
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
  postCity: cityName => postCity(cityName)
});

const mapDispatchToProps = dispatch => ({
  addCity: cityName => dispatch(addCity(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavorite);
