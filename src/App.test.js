import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
describe("App Component", function () {
  it("adding Test library passed successfully!", function () {
    let { getByText } = render(<App />);
    expect(getByText("Hello world React!")).toMatchInlineSnapshot(
      <h1>adding Test library passed successfully!</h1>
    );
  });
});
