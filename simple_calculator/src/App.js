import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  // Define state variables for input fields and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  // Function to handle calculation
  const calculate = () => {
    let calculatedResult;
    switch (operator) {
      case '+':
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        calculatedResult = '';
    }
    setResult(calculatedResult);
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={calculate}>SUBMIT</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;
