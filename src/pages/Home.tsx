import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
  return (
    <>
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

        <div className="MyHobbyCard">
          <Card className="MyHobbyCardContainer"style={{ width: '100%' }}>
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
