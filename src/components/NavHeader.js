import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavHeader() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <Navbar className="navbar-container mb-3">
        <Container fluid>
          <Navbar.Brand
            href="#home"
            className="text-white ms-3"
            onClick={handleClick}
          >
            THE SOUND AMBIENCE
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;
