import React from "react";
import { shallow } from "enzyme";

import Home from ".././src/Home/Home";

describe("<Home /> component", () => {
  const wrapper = shallow(<Home />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
