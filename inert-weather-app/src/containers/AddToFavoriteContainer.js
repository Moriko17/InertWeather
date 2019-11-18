import { connect } from "react-redux";
import { addCity } from "../store/actions/actions";
import AddToFavorite from "../components/AddToFavorite/AddToFavorite";

const mapStateToProps = state => ({
  favoriteData: state.favoriteWeather
});

const mapDispatchToProps = dispatch => ({
  addCity: cityName => dispatch(addCity(cityName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToFavorite);
