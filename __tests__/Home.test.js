import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";

import Home from ".././src/Home/Home";
import { storeFactory } from ".././src/testUtils";
import { fetchMeetups } from ".././src/redux/actions/meetupActions";
import { FETCH_MEETUPS } from ".././src/redux/actions/types";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Home store={store} />).dive();
};

describe("<Home /> component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {};
    wrapper = setUp(initialState);
  });
  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
