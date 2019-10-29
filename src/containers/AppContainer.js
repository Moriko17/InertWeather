import { connect } from "react-redux";
import { fetchWeatherByCoord } from "../store/actions/actions";
import App from "../components/App";
import "../styles/styles.css";
import { getMainCity } from "../store/reducers/weatherReducer";

const mapStateToProps = state => ({ mainCity: getMainCity(state.weather) });
const mapDispatchToProps = dispatch => ({
  fetchWeatherByCoord: (coord, id) => dispatch(fetchWeatherByCoord(coord, id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
