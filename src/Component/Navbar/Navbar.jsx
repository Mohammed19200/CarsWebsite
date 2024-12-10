import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogo from "../../assets/nav/logo.png";
import "./Navbar.css";

export default function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={navLogo} alt="Nav Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="navLinksStyle" href="#action1">
              Become a renter
            </Nav.Link>
            <Nav.Link className="navLinksStyle" href="#action2">
              Rental deals
            </Nav.Link>
            <Nav.Link className="navLinksStyle" href="#action2">
              How it work
            </Nav.Link>
            <Nav.Link className="navLinksStyle" href="#action2">
              Why choose us
            </Nav.Link>
          </Nav>
          <Form className="d-flex" style={{ gap: "1rem " }}>
            <Button variant="btn btn-outline-secondary">Sign In</Button>
            <Button variant="btn btn-primary">Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
