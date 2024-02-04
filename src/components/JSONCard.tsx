import '../App.css'
import Card from 'react-bootstrap/Card';

interface JSONCardProps {
    user: {
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
}

export default function JSONCard({user}: JSONCardProps ) {
    return (
        <div>
            <div className="JSONCardContainer">
                <Card className="JSONCards">
                    <Card.Body className="JSONCardBody">
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>{user.userName}</Card.Text>
                        <Card.Text>Email:{" " + user.email}</Card.Text>
                        <Card.Text>Address: {" " + user.address.street}</Card.Text>
                        <Card.Text>Suite: {" " + user.address.suite}</Card.Text>
                        <Card.Text>City: {" " + user.address.city}</Card.Text>
                        <Card.Text>Zip Code:{" " + user.address.zipcode}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
