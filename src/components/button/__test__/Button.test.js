import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// import renderer from "react-test-render";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("render button correctly", () => {
  const { getByTestId } = render(<Button label="Click me please" />);
  expect(getByTestId("button")).toHaveTextContent("Click me please");
});

it("render button correctly", () => {
  const { getByTestId } = render(<Button label="Save" />);
  expect(getByTestId("button")).toHaveTextContent("Save");
});

// it("matches snapshot", () => {
//   const tree = renderer.create(<Button label="save" />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
