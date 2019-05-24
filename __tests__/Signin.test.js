import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import { Redirect } from "react-router";

import Signin from ".././src/Auth/Signin";

jest.mock("axios");

describe("<Signin /> component", () => {
  const postSpy = jest.spyOn(axios, "post");
  const wrapper = shallow(<Signin />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with correct state", () => {
    expect(shallow(<Signin />).state("isSignedIn")).toEqual(false);
    expect(shallow(<Signin />).state("loading")).toEqual(false);
    expect(shallow(<Signin />).state("error")).toEqual(null);
  });

  test("changes state when form is submitted", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault: () => console.log("preventDefault")
    });
    expect(wrapper.state("loading")).toEqual(true);
  });

  test("changes state when form is submitted", () => {
    const formWrapper = shallow(<Signin />).find("form");
    formWrapper.simulate("submit", {
      preventDefault: () => console.log("preventDefault")
    });
    expect(postSpy).toBeCalled();
  });

  test("display error if exists in state", () => {
    const errWrapper = shallow(<Signin />);
    expect(errWrapper.find(".err")).toHaveLength(0);
    errWrapper.setState({ error: true, loading: false });
    expect(errWrapper.state("error")).toEqual(true);
    expect(errWrapper.find(".err")).toHaveLength(1);
  });

  test("redirect on successful login", () => {
    const redirectWrapper = shallow(<Signin />);
    expect(redirectWrapper.find(Redirect)).toHaveLength(0);
    redirectWrapper.setState({ isSignedIn: true });
    expect(redirectWrapper.find(Redirect)).toHaveLength(1);
  });
});
