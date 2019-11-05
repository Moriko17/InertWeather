import React from "react";
import renderer from "react-test-renderer";
import AddToFavorite from "./AddToFavorite";

describe("AddToFavorite renders right", () => {
  it("Renders correctly", () => {
    const tree = renderer.create(<AddToFavorite addCity={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
