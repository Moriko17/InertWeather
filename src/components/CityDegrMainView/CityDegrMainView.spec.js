import React from "react";
import renderer from "react-test-renderer";
import CityDegrMainView from "./CityDegrMainView";

describe("CityDegrMainView renders right", () => {
  const fetchedData = {
    cityName: "Paris",
    temp: 17.3,
    icon: "01n"
  };

  it("Renders correctly with no data", () => {
    const tree = renderer.create(<CityDegrMainView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly with passed data", () => {
    const tree = renderer
      .create(<CityDegrMainView fetchedData={fetchedData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
