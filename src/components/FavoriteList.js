import React from "react";
import "../styles/styles.css";
import FavoriteItem from "./FavoriteItem";

class FavoriteList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
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
