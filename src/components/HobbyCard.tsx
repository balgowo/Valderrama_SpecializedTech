import '../App.css'
import Card from 'react-bootstrap/Card';

interface HobbyCardProps {
    imageSrc: string;
    hobbyName: string;
    hobbyDesc: string;
}

export default function HobbyCard({imageSrc, hobbyName, hobbyDesc}: HobbyCardProps) {
    return (
        <div className="hobbyCardContainer">
            <Card className="hobbyCards">
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body className="hobbyCardBody">
                    <Card.Title>{hobbyName}</Card.Title>
                    <Card.Text>{hobbyDesc}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
