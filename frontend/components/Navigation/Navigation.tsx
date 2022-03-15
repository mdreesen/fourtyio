import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>fourtyio</Navbar.Brand>
        <Nav>
          <Nav.Link href="/home/client/home">Home</Nav.Link>
          <Nav.Link href="/home/client/settings">Settings</Nav.Link>
          <Nav.Link href="#pricing">Link</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
