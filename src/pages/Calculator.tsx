import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import CalculatorButton from '../components/CalculatorButton';
import Input from '../components/Input';
import { useState } from "react";
import * as math from "mathjs";

export default function Calculator() {
  const navigate = useNavigate();
  const buttonColor = "royalblue";

  const handleDropdownSelect = (eventKey: string | null) => {
    if (eventKey) {
      navigate(eventKey);
    }
  };

  const [result, setResult] = useState<string[]>([""]);
  const [expression, setExpression] = useState<string[]>([""]);

  const addToExpression = (val: string) => {
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
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand><FontAwesomeIcon icon={faHome} /></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="" id="basic-nav-dropdown" onSelect={handleDropdownSelect}>
                <NavDropdown.Item eventKey="/calculator">Calculator</NavDropdown.Item>
                <NavDropdown.Item eventKey="/hobby">Hobbies</NavDropdown.Item>
                <NavDropdown.Item eventKey="/json">JSON</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
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
