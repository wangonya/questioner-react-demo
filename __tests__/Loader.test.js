import React from "react";
import { shallow } from "enzyme";

import Loader from ".././src/Loader/Loader";

describe("<Loader /> component", () => {
  const wrapper = shallow(<Loader />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
