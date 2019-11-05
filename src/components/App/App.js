import React from "react";
import "../../styles/styles.css";
import CityDegrMainView from "../CityDegrMainView/CityDegrMainView";
import SideDataMainView from "../SideDataMainView/SideDataMainView";
import AddToFavoriteContainer from "../../containers/AddToFavoriteContainer";
import FavoriteListContainer from "../../containers/FavoriteListContainer";
import Loading from "../Loading/Loading";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchWeatherByCoord();
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
      <div className="container">
        <div className="header">
          <button onClick={() => this.props.fetchWeatherByCoord()}>
            Update Geolocation
          </button>
        </div>
        {Object.keys(this.props.mainCity).length > 1 ? (
          this.props.mainCity.isLoading ? (
            <Loading />
          ) : (
            <div className="main-view">
              <CityDegrMainView fetchedData={this.props.mainCity.fetchedData} />
              <SideDataMainView fetchedData={this.props.mainCity.fetchedData} />
            </div>
          )
        ) : (
          <div className="main-view">
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
