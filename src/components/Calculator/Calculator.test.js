import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

describe("Calculator", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Display and Keypad components", () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Display displayValue={wrapper.find("Display").props().displayValue} />,
        <Keypad
          callOperator={wrapper.find("Keypad").props().callOperator}
          numbers={wrapper.find("Keypad").props().numbers}
          operators={wrapper.find("Keypad").props().operators}
          setOperator={wrapper.find("Keypad").props().setOperator}
          updateDisplay={wrapper.find("Keypad").props().updateDisplay}
        />,
      ])
    ).toEqual(true);
  });
});
