import React from "react";
import "../styles/styles.css";

class FavoriteItem extends React.Component {
  render() {
    const { city } = this.props;
    return (
      <div>
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
              <p>Error</p>
            )
          ) : (
            <div>
              <div className="favorite-q">
                <p>Wind:</p>
                <p>Clouds:</p>
                <p>Pressure:</p>
                <p>Humidity:</p>
                <p>Coord:</p>
              </div>
              <div className="favorite-a">
                <p>{city.wind} m/s</p>
                <p>{city.cloudState}</p>
                <p>{(city.pressure * 0.750062).toFixed(0)} mmHg</p>
                <p>{city.humidity} %</p>
                <p>
                  [{city.coord.lat}, {city.coord.lon}]
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FavoriteItem;
