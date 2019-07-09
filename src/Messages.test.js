import React from "react";
import ReactDom from "react-dom";
import Messages from "./Messages";
import renderer from "react-test-renderer";

describe("Message component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Messages />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render ui without crashing when unread", () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
