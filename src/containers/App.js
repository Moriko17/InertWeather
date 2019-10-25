import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchWeather, fetchWeatherByCoord } from "../actions/actions";
import { BallBeat } from "react-pure-loaders";
import { BeatLoader } from "react-spinners";
import MainView from "../components/MainView";
import Loading from "../components/Loading";
import SecondaryView from "../components/SecondaryView";
import AddToFavForm from "../components/AddToFavForm";
import { FavRedux } from "./FavContainer";
import Error from "../components/Error";
import "../styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.geoSuccess = this.geoSuccess.bind(this);
    this.geoFail = this.geoFail.bind(this);
    this.updGeo = this.updGeo.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFail);
  }

  geoSuccess(pos) {
    this.props.fetchWeatherByCoord(pos.coords.latitude, pos.coords.longitude);
  }

  geoFail(err) {
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

    return (
      <div className="container">
        <div className="header">
          <button onClick={this.updGeo}>upd geolocation</button>
        </div>
        {this.isNotEmpty(data.mainCityData) || isLoading ? (
          isLoading === true ? (
            <div className="loading">
              <BeatLoader className="loading" loading={isLoading} />
            </div>
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
      </div>
    );

    // let data = this.props.data;
    // return (
    //   <div className="container">
    //     <div className="header">
    //       <button onClick={this.updGeo}>upd geolocation</button>
    //     </div>
    //     {Object.keys(data).length > 0 && data.constructor === Object ? (
    //       <div className="main-view">
    //         <MainView name={data.name} temp={data.main.temp} />
    //         <SecondaryView
    //           wind={data.wind.speed}
    //           clouds={data.weather[0].description}
    //           pressure={data.main.pressure}
    //           humidity={data.main.humidity}
    //           lon={data.coord.lon}
    //           lat={data.coord.lat}
    //         />
    //       </div>
    //     ) : (
    //       <Loading />
    //     )}
    {
      /* <AddToFavForm fetchWeather={this.props.fetchWeather} />
        <div className="fav-containers">
          <FavRedux case={0} />
          <FavRedux case={1} />
        </div> */
    }
    //   </div>
    // );
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
