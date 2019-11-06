import React from "react";
import ReactDOM from "react-dom";
import MarsApp from "./MarsApp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MarsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
