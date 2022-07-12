import React from "react";

import { render, cleanup } from "@testing-library/react";

import Application from "../../App";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});
