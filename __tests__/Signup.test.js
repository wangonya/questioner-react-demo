import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

import Signup from ".././src/Auth/Signup";
import { storeFactory } from ".././src/testUtils";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Signup store={store} />).dive();
};

describe("<Signup /> component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {};
    wrapper = setUp(initialState);
  });
  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
