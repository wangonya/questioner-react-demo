import React from "react";
import { shallow } from "enzyme";

import App from "../src/App";

describe("<App /> root component", () => {
  test("renders without crashing", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  test("renders <Navbar /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Navbar")).toHaveLength(1);
  });
});
