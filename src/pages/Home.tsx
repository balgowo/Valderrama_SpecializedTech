import React from 'react'
import '../App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const navigate = useNavigate();

  const handleDropdownSelect = (eventKey: string | null) => {
    if (eventKey) {
      navigate(eventKey);
    }
  };
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
      
      <div className="content-wrapper">
        <h1 className="header">DIGITAL TRANSFORMATION</h1>
        <div className="nameHolder">
          <Form.Label column sm="2" className="nameHolderContent">Created By</Form.Label>
          <Form.Control type="text" className="nameHolderContent" placeholder="Mark Christian N. Valderrama" />
        </div>

        <div className="functionButtons">
          <Link to="/calculator" className="col">
            <Button variant="outline-primary" className="full-width-button">Calculator</Button>{' '}
          </Link>
          <Link to="/json" className="col">
            <Button variant="outline-primary" className="full-width-button">JSON</Button>{' '}
          </Link>
        </div>

        <div className="hobbyCard">
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>My Hobbies</Card.Title>
              <Card.Text>
                Hi! My name is Mark Valderrama. By clicking the button below, you will learn more about me ㋡⍢
              </Card.Text>
              <Link to="/hobby">
                <Button variant="outline-primary" >Hobbies</Button>{' '}
              </Link>
            </Card.Body>
          </Card>
        </div>
      
      </div>
    </>
    
  )
}
