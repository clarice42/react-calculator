import React, { useState } from "react";
import "./Calculator.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

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

  const updateDisplay = () => {
    console.log("update display");
    setDisplayValue('9');
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
