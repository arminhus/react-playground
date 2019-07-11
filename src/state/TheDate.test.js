import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import TheDate from "./TheDate";

describe("TheDate Component Testing", () => {
  test("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<TheDate />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  test.skip("should render the UI as expected from the snapshot", () => {
    expect(renderer.create(<TheDate />).toJSON()).toMatchSnapshot();
  });
});
