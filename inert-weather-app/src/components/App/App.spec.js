import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("App renders right", () => {
  const filledMainCity = {
    errorMessage: "",
    isLoading: false,
    fetchedData: {
      cityName: "Marunouchi",
      cloudState: "few clouds",
      coord: {
        lat: 35.68,
        lon: 139.76
      },
      humidity: 63,
      icon: "02n",
      pressure: 1014,
      temp: 13.11,
      wind: 2.6
    },
    id: 0
  };

  const loadingMainCity = {
    errorMessage: "",
    isLoading: true,
    id: 0
  };

  const errorMainCity = {
    errorMessage: 404,
    isLoading: false,
    id: 0
  };

  const w8MainCity = {
    id: 0
  };

  it("Renders correctly with fetched data", () => {
    const tree = renderer
      .create(
        <App
          fetchWeatherByCoord={() => {}}
          updateState={() => {}}
          mainCity={filledMainCity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly while fetching data", () => {
    const tree = renderer
      .create(
        <App
          fetchWeatherByCoord={() => {}}
          updateState={() => {}}
          mainCity={loadingMainCity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly with catched error", () => {
    const tree = renderer
      .create(
        <App
          fetchWeatherByCoord={() => {}}
          updateState={() => {}}
          mainCity={errorMainCity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly while w8 for geolocation permissions", () => {
    const tree = renderer
      .create(
        <App
          fetchWeatherByCoord={() => {}}
          updateState={() => {}}
          mainCity={w8MainCity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
