import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function JSON() {
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
      
      <div>
        json
      </div>
    </>
  )
}
