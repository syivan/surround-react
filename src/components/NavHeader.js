import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function NavHeader() {
  return (
    <>
      <Navbar className="navbarContainer bg-primary mb-3">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-white ms-3">
            Surround
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;
