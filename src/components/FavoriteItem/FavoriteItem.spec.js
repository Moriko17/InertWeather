import React from "react";
import renderer from "react-test-renderer";
import FavoriteItem from "./FavoriteItem";

describe("AddToFavorite renders right", () => {
  const errorCity = {
    cityName: "12",
    errorMessage: 404,
    id: 55,
    isLoading: false
  };

  const filledCity = {
    cityName: "Marunouchi",
    erroeMessage: "",
    isLoading: false,
    fetchedData: {
      cityName: "Marunouchi",
      cloudState: "few clouds",
      coord: {
        lat: 35.68,
        lon: 139.76
      },
      humidity: 63,
      pressure: 1014,
      temp: 13.11,
      wind: 2.6
    },
    id: 60
  };

  const loadingCity = {
    cityName: "Marunouchi",
    erroeMessage: "",
    isLoading: true,
    id: 60
  };

  it("Renders correctly with error catched", () => {
    const tree = renderer
      .create(
        <FavoriteItem
          fetchWeather={() => {}}
          deleteCity={() => {}}
          city={errorCity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly with fetched data", () => {
    const tree = renderer
      .create(
        <FavoriteItem
          fetchWeather={() => {}}
          deleteCity={() => {}}
          city={filledCity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly while loading", () => {
    const tree = renderer
      .create(
        <FavoriteItem
          fetchWeather={() => {}}
          deleteCity={() => {}}
          city={loadingCity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
