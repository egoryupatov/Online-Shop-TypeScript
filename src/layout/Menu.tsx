import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Menu: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Store</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/add-product">Add a Product</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
};
