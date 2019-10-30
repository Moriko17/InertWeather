import React from "react";
import "../styles/styles.css";

class Favorite extends React.Component {
  render() {
    return (
      <div>
        {this.props.favoriteData.cities.map(city => (
          <p key={city.id}>{city.cityName}</p>
        ))}
      </div>
    );
  }
}

export default Favorite;
