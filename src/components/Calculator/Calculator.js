import React, { useState } from "react";
import "./Calculator.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import { act } from "react-dom/test-utils";

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [numbers, setNumbers] = useState([
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    ".",
    "0",
    "ce",
  ]);
  const [operators, setOperators] = useState(["/", "x", "-", "+"]);
  const [selectedOperator, setSelectedOperator] = useState("");
  const [storedValue, setStoredValue] = useState("");

  const callOperator = () => {
    console.log("call operation");
  };

  const setOperator = () => {
    console.log("set operation");
  };

  const updateDisplay = (value) => {
    let actualValue = displayValue;
    // prevent multiple occurences of '.'
    if (value === "." && displayValue.includes(".")) value = "";

    if (value === "ce") {
      // deletes last char in displayValue
      actualValue = displayValue.substr(0, displayValue.length - 1);
      // set displayValue to '0' if displayValue is empty string
      if (actualValue === "") actualValue = "0";
    } else {
      // replace displayValue with value if displayValue equal to '0'
      // else concatenate displayValue and value
      actualValue === "0" ? (actualValue = value) : (actualValue += value);
    }

    setDisplayValue(actualValue);
  };

  return (
    <div className="calculator-container">
      <Display displayValue={displayValue} />
      <Keypad
        callOperator={callOperator}
        numbers={numbers}
        operators={operators}
        setOperator={setOperator}
        updateDisplay={updateDisplay}
      />
    </div>
  );
};

export default Calculator;
