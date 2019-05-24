import React from "react";
import { shallow } from "enzyme";
import axios from "axios";

import Home from ".././src/Home/Home";

jest.mock("axios");

describe("<Home /> component", () => {
  const getSpy = jest.spyOn(axios, "get");
  const wrapper = shallow(<Home />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with correct state", () => {
    expect(shallow(<Home />).state("meetups")).toEqual([]);
    expect(shallow(<Home />).state("loading")).toEqual(true);
    expect(shallow(<Home />).state("error")).toEqual(null);
  });

  test("mock fetch a list of meetups from api", () => {
    expect(getSpy).toBeCalled();
    getSpy.mockClear();
  });

  test("renders error from state", () => {
    const errWrapper = shallow(<Home />);
    expect(errWrapper.find("div.err")).toHaveLength(0);
    errWrapper.setState({ error: true, loading: false });
    expect(errWrapper.state("error")).toEqual(true);
    expect(errWrapper.find("div.err")).toHaveLength(1);
  });
});
