import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchWeather, deleteFavCity } from "../actions/actions";
import FavItem from "../components/FavItem";
import "../styles/styles.css";

class FavContainer extends Component {
  componentDidMount() {
    switch (this.props.case) {
      case 0:
        if (localStorage.getItem("city1") !== "undefined") {
          this.props.fetchWeather(localStorage.getItem("city1"), 0);
        }
        break;
      case 1:
        if (localStorage.getItem("city2") !== "undefined") {
          this.props.fetchWeather(localStorage.getItem("city2"), 1);
        }
        break;
      default:
    }
  }

  componentDidUpdate(prevProps, prevState) {
    switch (this.props.case) {
      case 0:
        localStorage.setItem("city1", this.props.fav1Data.fname);
        break;
      case 1:
        localStorage.setItem("city2", this.props.fav2Data.fname);
        break;
      default:
    }
  }

  render() {
    let fav1Data = this.props.fav1Data;
    let deleteFavCity = this.props.deleteFavCity;
    let fav2Data = this.props.fav2Data;

    let toRender;
    if (this.props.case === 0) {
      toRender = (
        <FavItem
          err={this.props.errMsg1}
          data={fav1Data}
          num={0}
          deleteCity={deleteFavCity}
          loading={this.props.isFavLoading}
        />
      );
    } else {
      toRender = (
        <FavItem
          err={this.props.errMsg2}
          data={fav2Data}
          num={1}
          deleteCity={deleteFavCity}
          loading={this.props.isFav2Loading}
        />
      );
    }

    return <div className="fav-container">{toRender}</div>;
  }
}

function mapStateToProps(state) {
  let fav1Data = state.weather.fav1Data;
  let isFavLoading = state.weather.isFavLoading;
  let fav2Data = state.weather.fav2Data;
  let isFav2Loading = state.weather.isFav2Loading;
  let errMsg1 = state.weather.errorMessage1;
  let errMsg2 = state.weather.errorMessage2;
  const props = {
    isFavLoading,
    fav1Data,
    isFav2Loading,
    fav2Data,
    errMsg1,
    errMsg2
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, deleteFavCity }, dispatch);
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);
const FavRedux = enhance(FavContainer);

export { FavContainer, FavRedux };
