import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'

export default function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">fourtyio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home/client/home">home</Nav.Link>
          <Nav.Link href="/home/client/settings">Settings</Nav.Link>
          <Nav.Link href="#pricing">Link</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
