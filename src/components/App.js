import React from "react";
import "../styles/styles.css";
import CityDegrMainView from "./CityDegrMainView";
import SideDataMainView from "./SideDataMainView";
import AddToFavoriteContainer from "../containers/AddToFavoriteContainer";
import FavoriteContainer from "../containers/FavoriteContainer";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <p>Inert Weather</p>
          <button onClick={() => this.props.fetchWeatherByCoord()}>+</button>
        </div>
        {Object.keys(this.props.mainCity).length > 1 ? (
          this.props.mainCity.isLoading ? (
            <p>Loading</p>
          ) : (
            <div>
              <CityDegrMainView fetchedData={this.props.mainCity.fetchedData} />
              <SideDataMainView fetchedData={this.props.mainCity.fetchedData} />
            </div>
          )
        ) : (
          <div>
            <CityDegrMainView />
            <SideDataMainView />
          </div>
        )}
        <AddToFavoriteContainer />
        <FavoriteContainer />
      </div>
    );
  }
}

export default App;
