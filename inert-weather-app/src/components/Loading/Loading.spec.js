import React from "react";
import renderer from "react-test-renderer";
import Loading from "./Loading";

describe("Loading renders right", () => {
  it("Renders correctly", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
