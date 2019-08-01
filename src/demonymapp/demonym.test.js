import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";

import Demonym from "./demonym";

describe("Demonym component test", () => {
  test("should render demonym component", () => {
    const div = document.createElement("div");
    ReactDom.render(<Demonym />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  test("should render with name and country", () => {
    const tree = renderer
      .create(<Demonym name="American" country="United States of America" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
