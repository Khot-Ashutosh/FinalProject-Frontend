import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo1.jpeg";

function Header() {
  return (
    <Navbar bg="secondory" expand="lg">
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
            <Nav.Link href="#action1" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="fw-bold">
              About Us
            </Nav.Link>
            <Nav.Link href="#action2" className="fw-bold">
              Contact Us
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Nav.Link href="#action3">
                  <span className="nav-link btn btn-outline-danger">
                    Sign In
                  </span>
                </Nav.Link>
              </li>

              <li className="nav-item">
                <Nav.Link href="#action3">
                  <span className="nav-link btn btn-outline-danger">
                    Signup
                  </span>
                </Nav.Link>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
