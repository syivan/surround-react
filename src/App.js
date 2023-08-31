import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    <>
      <Navbar className="navbarContainer bg-primary">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-white ms-3">Surround</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="main-container mt-2">
        <Card>
          <Card.Body>HELLO</Card.Body>
        </Card>
        <Card>
          <Card.Body>Nice one</Card.Body>
        </Card>
      </div>
    </>
  )
};

export default App;
