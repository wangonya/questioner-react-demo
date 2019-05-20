import React from "react";
import { shallow } from "enzyme";

import About from ".././src/About/About";
describe("<About /> component", () => {
  const wrapper = shallow(<About />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("[data-test='about-page-component']")).toHaveLength(1);
  });
});
