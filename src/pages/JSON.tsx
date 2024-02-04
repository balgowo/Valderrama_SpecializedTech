import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import JSONCard from '../components/JSONCard';

export default function JSON() {

  interface User {
    name: string;
    userName: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  }
  
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  const handleDropdownSelect = (eventKey: string | null) => {
    if (eventKey) {
      navigate(eventKey);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
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
      
      <div className="JSONWrapper">
        <h1>SHEEEEEEEEEEEEEEEEEEESH</h1>
        <div className="JSONCardHolder">
        {users.map((user) => (
          <JSONCard key={user.name} user={user} />
        ))}
        </div>
      </div>
    </>
  )
}
