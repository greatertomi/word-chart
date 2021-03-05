import React from "react";
import ReactDOM from "react-dom";
import TableChart from "../TableChart";

import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TableChart />, div);
});
