import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";

export default function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Link</Nav.Link>
                    <Nav.Link href="#features">Link</Nav.Link>
                    <Nav.Link href="#pricing">Link</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}