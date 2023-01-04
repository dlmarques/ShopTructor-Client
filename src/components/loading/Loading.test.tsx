import * as React from "react";
import { render } from "@testing-library/react";
import LoadingScreen from "./Loading";

describe("Loading", () => {
  it("renders loading component", () => {
    render(<LoadingScreen />);
  });
});
