import * as React from "react";
import { render } from "@testing-library/react";
import Auth from "./Auth";

describe("Auth", () => {
  it("Run auth", () => {
    render(<Auth />);
  });
});
