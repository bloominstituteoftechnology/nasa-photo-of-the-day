import React from "react";
import App from "../App";

import renderer from "react-test-renderer";

test("First snapshot test", () => {
  const component = renderer.create(<App />);
  let tree = component.toJason();

  expect(tree).toMatchSnapshot();
});
