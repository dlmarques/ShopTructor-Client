import * as React from "react";
import { render } from "@testing-library/react";

import Register from "./Register";

describe("App", () => {
  it("renders App component", () => {
    render(<Register />);
  });
});
