import '../App.css'
import Card from 'react-bootstrap/Card';

interface JSONCardProps {
    user: {
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
        };
    }
}

export default function JSONCard({user}: JSONCardProps ) {
    return (
        <div>
            <div className="JSONCardContainer">
                <Card className="JSONCards">
                    <Card.Body className="JSONCardBody">
                        <Card.Title><h3>{user.name}</h3></Card.Title>
                        <Card.Text><b>Username: </b>{user.username}</Card.Text>
                        <Card.Text><b>Email:</b>{" " + user.email}</Card.Text>
                        <Card.Text><b>Address:</b> {" " + user.address.street}</Card.Text>
                        <Card.Text><b>Suite: </b>{" " + user.address.suite}</Card.Text>
                        <Card.Text><b>City: </b>{" " + user.address.city}</Card.Text>
                        <Card.Text><b>Zip Code:</b>{" " + user.address.zipcode}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
