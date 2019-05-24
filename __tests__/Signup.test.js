import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import { Redirect } from "react-router";

import Signup from ".././src/Auth/Signup";

jest.mock("axios");

describe("<Signup /> component", () => {
  const getSpy = jest.spyOn(axios, "get");
  const wrapper = shallow(<Signup />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with correct state", () => {
    expect(shallow(<Signup />).state("isSignedUp")).toEqual(false);
    expect(shallow(<Signup />).state("loading")).toEqual(false);
    expect(shallow(<Signup />).state("error")).toEqual(null);
  });

  test("changes state when form is submitted", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault: () => console.log("preventDefault")
    });
    expect(wrapper.state("loading")).toEqual(true);
  });

  test("display error if exists in state", () => {
    const errWrapper = shallow(<Signup />);
    expect(errWrapper.find(".err")).toHaveLength(0);
    errWrapper.setState({ error: true, loading: false });
    expect(errWrapper.state("error")).toEqual(true);
    expect(errWrapper.find(".err")).toHaveLength(1);
  });

  test("redirect on successful login", () => {
    const redirectWrapper = shallow(<Signup />);
    expect(redirectWrapper.find(Redirect)).toHaveLength(0);
    redirectWrapper.setState({ isSignedUp: true });
    expect(redirectWrapper.find(Redirect)).toHaveLength(1);
  });
});
