import React from "react";
import "../styles/styles.css";
import FavoriteItem from "./FavoriteItem";

class FavoriteList extends React.Component {
  componentDidUpdate() {
    let dataToStorage = this.props.favoriteData.cities.filter(
      city => city.fetchedData
    );
    dataToStorage = dataToStorage.map(city => ({
      id: city.id,
      cityName: city.cityName
    }));
    localStorage.setItem("cities", JSON.stringify(dataToStorage));
    localStorage.setItem("lastUsedId", this.props.favoriteData.lastUsedId);
  }
  render() {
    return (
      <div className="favorite-list">
        {this.props.favoriteData.cities.map(city => (
          <FavoriteItem
            key={city.id}
            city={city}
            deleteCity={this.props.deleteCity}
            fetchWeather={this.props.fetchWeather}
          />
        ))}
      </div>
    );
  }
}

export default FavoriteList;
