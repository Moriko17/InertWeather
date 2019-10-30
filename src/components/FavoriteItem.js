import React from "react";
import "../styles/styles.css";

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchWeather(this.props.city.cityName, this.props.city.id);
  }
  render() {
    const { city } = this.props;
    return (
      <div key={city.id}>
        <div>
          <div>
            <p>{city.cityName}</p>
            <p>{city.temp}</p>
            <button onClick={() => this.props.deleteCity(city.id)}>X</button>
          </div>
          {city.isLoading === true || city.errorMessage !== "" ? (
            city.isLoading ? (
              <p>Loading</p>
            ) : (
              <p>{city.errorMessage}</p>
            )
          ) : city.fetchedData ? (
            <div>
              <div className="favorite-q">
                <p>Wind:</p>
                <p>Clouds:</p>
                <p>Pressure:</p>
                <p>Humidity:</p>
                <p>Coord:</p>
              </div>
              <div className="favorite-a">
                <p>{city.fetchedData.wind} m/s</p>
                <p>{city.fetchedData.cloudState}</p>
                <p>{(city.fetchedData.pressure * 0.750062).toFixed(0)} mmHg</p>
                <p>{city.fetchedData.humidity} %</p>
                <p>
                  [{city.fetchedData.coord.lat}, {city.fetchedData.coord.lon}]
                </p>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    );
  }
}

export default FavoriteItem;
