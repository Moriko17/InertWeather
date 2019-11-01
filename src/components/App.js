import React from "react";
import "../styles/styles.css";
import CityDegrMainView from "./CityDegrMainView";
import SideDataMainView from "./SideDataMainView";
import AddToFavoriteContainer from "../containers/AddToFavoriteContainer";
import FavoriteListContainer from "../containers/FavoriteListContainer";

class App extends React.Component {
  componentDidMount() {
    const newState = JSON.parse(localStorage.getItem("cities"))
      ? {
          cities: [...JSON.parse(localStorage.getItem("cities"))],
          lastUsedId: +localStorage.getItem("lastUsedId")
        }
      : {
          cities: [],
          lastUsedId: 0
        };
    this.props.updateState(newState);
  }
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
        <FavoriteListContainer />
      </div>
    );
  }
}

export default App;
