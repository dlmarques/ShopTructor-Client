import * as React from "react";
import { render } from "@testing-library/react";
import ForgotPassword from "./ForgotPassword";

describe("App", () => {
  it("renders App component", () => {
    render(<ForgotPassword />);
  });
});
