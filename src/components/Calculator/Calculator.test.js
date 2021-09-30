import React from "react";
import { mount, shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import { getByTestId } from "@testing-library/dom";

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

describe("updateDisplay", () => {
  let wrapper;

  beforeEach(() => (wrapper = mount(<Calculator />)));

  it("updates displayValue", () => {
    expect(wrapper.find("Display").props().displayValue).toEqual("0");
    wrapper.find(".number-key").first().simulate("click");
    expect(wrapper.find("Display").props().displayValue).toEqual("9");
  });

  it("concatenates displayValue", () => {
    wrapper.find(".number-key").first().simulate("click");
    wrapper.find(".number-key").at(1).simulate("click");
    expect(wrapper.find("Display").props().displayValue).toEqual("98");
  });

  it("removes leading '0' from displayValue", () => {
    wrapper.find(".number-key").at(10).simulate("click");
    expect(wrapper.find("Display").props().displayValue).toEqual("0");
    wrapper.find(".number-key").at(1).simulate("click");
    expect(wrapper.find("Display").props().displayValue).toEqual("8");
  });

  it("prevents multiple leading '0's from displayValue", () => {
    wrapper.find(".number-key").at(10).simulate("click");
    wrapper.find(".number-key").at(10).simulate("click");
    expect(wrapper.find("Display").props().displayValue).toEqual("0");
  });

  it("removes last char of displayValue", () => {
    wrapper.find(".number-key").at(1).simulate("click");
    wrapper.find(".number-key").at(2).simulate("click");
    wrapper.find(".number-key").at(11).simulate("click");
    expect(wrapper.find("Display").props().displayValue).toEqual("8");
  });

  it("prevents multiple instances of '.' in displayValue", () => {
    wrapper.find(".number-key").at(9).simulate("click");
    wrapper.find(".number-key").at(9).simulate("click");
    expect(wrapper.find("Display").props().displayValue).toEqual(".");
  });

  it("will set displayValue to '0' if displayValue is equal to an empty string", () => {
    wrapper.find(".number-key").at(11).simulate("click");
    expect(wrapper.find("Display").props().displayValue).toEqual("0");
  });
});

// describe("setOperator", () => {
//   let wrapper;

//   beforeEach(() => (wrapper = shallow(<Calculator />)));

//   it("updates the value of selectedOperator", () => {
//     const x = getByTestId(wrapper, "selectedOperator");
//     expect(x).toEqual("");
//     wrapper.find(".operator-key").first().simulate("click");
//     expect(wrapper.prop("selectedOperator")).toEqual("/");
//   });

//   it("updates the value of storedValue to the value of displayValue", () => {
//     wrapper.setState({ displayValue: "5" });
//     wrapper.instance().setOperator("+");
//     expect(wrapper.state("storedValue")).toEqual("5");
//   });

//   it('updates the value of displayValue to "0"', () => {
//     wrapper.setState({ displayValue: "5" });
//     wrapper.instance().setOperator("+");
//     expect(wrapper.state("displayValue")).toEqual("0");
//   });

//   it("selectedOperator is not an empty string, does not update storedValue", () => {
//     wrapper.setState({ displayValue: "5" });
//     wrapper.instance().setOperator("+");
//     expect(wrapper.state("storedValue")).toEqual("5");
//     wrapper.instance().setOperator("-");
//     expect(wrapper.state("storedValue")).toEqual("5");
//   });
// });
