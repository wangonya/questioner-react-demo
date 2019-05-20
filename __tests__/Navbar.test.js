import React from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";

import Navbar from ".././src/Navbar/Navbar";

import Home from ".././src/Home/Home";
import About from ".././src/About/About";
import Signin from ".././src/Auth/Signin";
import Signup from ".././src/Auth/Signup";

describe("<Navbar /> component", () => {
  const wrapper = shallow(<Navbar />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("<Router /> renders correct routes", () => {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap["/"]).toBe(Home);
    expect(pathMap["/about/"]).toBe(About);
    expect(pathMap["/signin/"]).toBe(Signin);
    expect(pathMap["/signup/"]).toBe(Signup);
  });
});
