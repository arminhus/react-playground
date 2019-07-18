import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import Tabs from "./Tabs";

describe("Tabs Component Testing", () => {
  const tabsProp = [
    {
      name: "First tab",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
    },
    {
      name: "Second tab",
      content:
        "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Third tab",
      content:
        "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
    }
  ];

  test("should render without errors", () => {
    const div = document.createElement("div");
    ReactDom.render(<Tabs />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  test("should render the first tab by default", () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />);
    expect(tree).toMatchSnapshot();
  });
});
