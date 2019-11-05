import React from "react";
import renderer from "react-test-renderer";
import Error from "./Error";

describe("AddToFavorite renders right", () => {
  it("Renders correctly", () => {
    const tree = renderer.create(<Error errorMessage={404} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
