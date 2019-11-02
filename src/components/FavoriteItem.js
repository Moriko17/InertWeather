import React from "react";
import "../styles/styles.css";
import Loading from "./Loading";
import Error from "./Error";

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchWeather(this.props.city.cityName, this.props.city.id);
  }
  render() {
    const { city } = this.props;
    console.log(this.props);
    return (
      <div className="favorite-container">
        <div className="favorite-bar">
          <p>{city.cityName}</p>
          {city.fetchedData ? <p>{city.fetchedData.temp} °C</p> : <p></p>}
          <button onClick={() => this.props.deleteCity(city.id)}>X</button>
        </div>
        {city.isLoading === true || city.errorMessage !== "" ? (
          city.isLoading ? (
            <Loading />
          ) : (
            <Error errorMessage={city.errorMessage} />
          )
        ) : city.fetchedData ? (
          <div className="favorite-bot">
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
    );
  }
}

export default FavoriteItem;
