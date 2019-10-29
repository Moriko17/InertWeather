import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchWeather, deleteFavCity } from "../actions/actions";
import "../styles/styles.css";
import AddToFavForm from "../components/AddToFavForm";
import Error from "../components/Error";
import FavoriteCityBar from "../components/FavoriteCityBar";

class FavoriteManager extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.updd = this.updd.bind(this);
  }

  updd(index) {
    this.setState({ index: index });
  }

  render() {
    console.log(this.props);
    const data = this.props.data;
    return (
      <div>
        <AddToFavForm
          lastIndex={this.props.data.lastIndex}
          fetchWeather={this.props.fetchWeather}
          // updd={this.updd}
        />
        {Object.keys(data).map(city => (
          <div>
            <FavoriteCityBar
              cityName={data[city].cityName}
              temp={data[city].temp}
            />
          </div>
        ))}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   const { data, isFavoriteLoading, favErrorMessage } = state.weather;
//   const props = {
//     data,
//     isFavoriteLoading,
//     favErrorMessage
//   };
//   return props;
// }

const mapStateToProps = state => ({
  data: state.weather.data
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, deleteFavCity }, dispatch);
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);
const FWR = enhance(FavoriteManager);
export { FWR };
