import React from "react";
import renderer from "react-test-renderer";
import SideDataMainView from "./SideDataMainView";

describe("SideDataMainView renders right", () => {
  const fetchedData = {
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
  };

  it("Renders correctly with no data", () => {
    const tree = renderer.create(<SideDataMainView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly with passed data", () => {
    const tree = renderer
      .create(<SideDataMainView fetchedData={fetchedData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
