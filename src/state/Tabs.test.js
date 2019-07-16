import React from "react";
import ReactDom from "react-dom";
import Tabs from "./Tabs";

describe("Tabs Component Testing", () => {
    test("should render without errors", () => {
        const div = document.createElement('div');
        ReactDom.render( < Tabs / > , div);
        ReactDom.unmountComponentAtNode(div);
    });
});