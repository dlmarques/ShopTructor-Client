import * as React from "react";
import { render } from "@testing-library/react";

import CreateFirstProject from "./CreateFirstProject";

describe("Create First Project", () => {
  it("renders App component", () => {
    render(<CreateFirstProject />);
  });
});
