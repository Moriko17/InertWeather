import React from "react";
import renderer from "react-test-renderer";
import FavoriteList from "./FavoriteList";

describe("FavoriteList renders right", () => {
  const favoriteDataWithOneCity = {
    cities: [
      {
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
      }
    ],
    lastUsedId: 60
  };

  const favoriteDataWithCities = {
    cities: [
      {
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
      },
      {
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
        id: 61
      },
      {
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
        id: 62
      }
    ],
    lastUsedId: 62
  };

  const favoriteDataBlank = {
    cities: [],
    lastUsedId: 70
  };

  it("Renders correctly with one city", () => {
    const tree = renderer
      .create(
        <FavoriteList
          fetchWeather={() => {}}
          deleteCity={() => {}}
          favoriteData={favoriteDataWithOneCity}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly without cities", () => {
    const tree = renderer
      .create(
        <FavoriteList
          fetchWeather={() => {}}
          deleteCity={() => {}}
          favoriteData={favoriteDataBlank}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly with many sities", () => {
    const tree = renderer
      .create(
        <FavoriteList
          fetchWeather={() => {}}
          deleteCity={() => {}}
          favoriteData={favoriteDataWithCities}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
