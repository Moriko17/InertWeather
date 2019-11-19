import React from "react";
import "../../styles/styles.css";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

class FavoriteList extends React.Component {
  componentDidMount() {
    this.props.fetchFavoritesList().then(response => {
      let cities = [];
      response.data.forEach(city => {
        cities.push({
          cityName: city.cityName,
          id: cities.length + 1
        });
      });
      const newState = {
        cities: cities,
        lastUsedId: cities.length + 1
      };
      this.props.updateState(newState);
    });
  }
  render() {
    return (
      <div className="favorite-list">
        {this.props.favoriteData.cities.map(city => (
          <FavoriteItem
            key={city.id}
            city={city}
            deleteCity={this.props.deleteCity}
            deleteCityOnSrv={this.props.deleteCityOnSrv}
            fetchWeather={this.props.fetchWeather}
          />
        ))}
      </div>
    );
  }
}

export default FavoriteList;
