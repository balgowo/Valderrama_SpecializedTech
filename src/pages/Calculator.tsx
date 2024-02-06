import * as math from "mathjs";
import { useState } from "react";
import '../App.css';
import CalculatorButton from '../components/CalculatorButton';
import Input from '../components/Input';

export default function Calculator() {

  const buttonColor = "royalblue";


  const [result, setResult] = useState<string[]>([""]);
  const [expression, setExpression] = useState<string[]>([""]);

  const addToExpression = (val: string) => {
    const lastChar = expression[expression.length - 1];

    // Check for consecutive operators
    const isOperator = ["+", "-", "*", "/"].includes(val);
    const isLastCharOperator = ["+", "-", "*", "/"].includes(lastChar);
  
    // Check for leading zero after an operator or at the start of the expression
    if ((isOperator || expression.length === 0) && val === "0" && lastChar !== ".") {
      return;
    }
  
    // Check for consecutive decimal points
    if (val === "." && lastChar === ".") {
      return;
    }
  
    // Check for leading zero after a decimal point, excluding multiple zeros
    if (lastChar === "." && val === "0" && !/[1-9]/.test(expression.join(""))) {
      return;
    }
  
    // Check for inputting zero after an operator
    if (lastChar && isLastCharOperator && val === "0" && lastChar !== ".") {
      return;
    }
    setExpression((expression) => [...expression, val]);
  }

  const clearInput = () => {
    setExpression ([]);
    setResult ([]);
  }

  const calculateExpression = () => {
    try {
      const input = expression.join("");
      const newResult = math.evaluate(input);
      setExpression([newResult.toString()]);
      setResult([newResult.toString()]);
    } catch (error) {
      setExpression(["Error"]);
      setResult(["Error"]);
    }
  }

  return (
    <>
      <div className="calculatorWrapper">
        <Input expression={expression} result={result}/>
        <div className="calcRow">
          <CalculatorButton value="7" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="8" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="9" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="/" color={buttonColor} handleClick={addToExpression}/>
        </div>
        <div className="calcRow">
          <CalculatorButton value="4" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="5" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="6" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="*" color={buttonColor} handleClick={addToExpression}/>
        </div>
        <div className="calcRow">
          <CalculatorButton value="1" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="2" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="3" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="+" color={buttonColor} handleClick={addToExpression}/>
        </div>
        <div className="calcRow">
          <CalculatorButton value="0" color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="." color={undefined} handleClick={addToExpression}/>
          <CalculatorButton value="=" color={undefined} handleClick={calculateExpression}/>
          <CalculatorButton value="-" color={buttonColor} handleClick={addToExpression}/>
        </div>
        <CalculatorButton value="Clear" color={"royalblue"} handleClick={clearInput} />
      </div>
    </>

    
  )
}
