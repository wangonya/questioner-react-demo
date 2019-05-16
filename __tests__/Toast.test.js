import React from "react";
import { shallow, render } from "enzyme";

import Toast from ".././src/Toast/Toast";

describe("<Toast /> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Toast />);
  });

  test("renders without crashing -- no props", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div.ok")).toHaveLength(0);
  });

  test("renders without crashing -- with props", () => {
    wrapper.setProps({ type: "ok", message: "testing" });
    expect(wrapper.find("div.ok")).toHaveLength(1);
    expect(wrapper.text()).toBe("testing");
  });
});
