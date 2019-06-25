import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

import Signin from ".././src/Auth/Signin";
import { storeFactory } from ".././src/testUtils";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Signin store={store} />).dive();
};

describe("<Signin /> component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {};
    wrapper = setUp(initialState);
  });
  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
