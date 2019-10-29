import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchWeatherByCoord } from "../actions/actions";
import { BeatLoader } from "react-spinners";
import MainView from "../components/MainView";
import Error from "../components/Error";
import SecondaryView from "../components/SecondaryView";
import "../styles/styles.css";
import { FavRedux } from "./FavContainer";
import FavoriteManager from "./FavoriteManager";

class App extends Component {
  constructor(props) {
    super(props);
    this.geoSuccess = this.geoSuccess.bind(this);
    this.geoFail = this.geoFail.bind(this);
    this.updGeo = this.updGeo.bind(this);
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFail);
    } else {
      this.geoFail();
    }
  }

  geoSuccess(pos) {
    this.props.fetchWeatherByCoord(pos.coords.latitude, pos.coords.longitude);
  }

  geoFail() {
    this.props.fetchWeatherByCoord(35.68, 139.76);
  }

  updGeo() {
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFail);
  }

  isNotEmpty(obj) {
    return !(Object.entries(obj).length === 0 && obj.constructor === Object);
  }

  render() {
    let { data, isLoading, errorMessage } = this.props;
    console.log(data);

    return (
      <div className="container">
        <div className="header">
          <button onClick={this.updGeo}>upd geolocation</button>
        </div>
        {this.isNotEmpty(data.mainCityData) ||
        isLoading ||
        errorMessage !== "" ? (
          isLoading === true ? (
            <div className="loading">
              <BeatLoader className="loading" loading={isLoading} />
            </div>
          ) : errorMessage !== "" ? (
            <Error />
          ) : (
            <div className="main-city-part">
              <MainView data={data.mainCityData} />
              <SecondaryView data={data.mainCityData} />
            </div>
          )
        ) : (
          <div className="main-city-part">
            <MainView case="void" />
            <SecondaryView case="void" />
          </div>
        )}
        {/* <FavoriteManager /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { data, errorMessage, isLoading } = state.weather;
  const props = {
    data,
    errorMessage,
    isLoading
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeatherByCoord }, dispatch);
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);
const AppWithRedux = enhance(App);

export { App, AppWithRedux };
