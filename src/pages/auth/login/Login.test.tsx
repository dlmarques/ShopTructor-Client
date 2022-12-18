import * as React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

describe("App", () => {
  it("renders App component", () => {
    render(<Login />);
  });
});
