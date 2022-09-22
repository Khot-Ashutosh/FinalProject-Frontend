import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo1.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <img src={logo} alt="" style={{ width: "3%" }} />
        <Navbar.Brand href="#" className="fw-bold">
          BookMyBus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="fw-bold">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="fw-bold">
              <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link className="fw-bold">
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
