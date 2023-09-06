import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Initialization from "./components/Initialization";

const App = () => {
  return (
    <>
      <Navbar className="navbarContainer bg-primary">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-white ms-3">Surround</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="main-container mt-2">
        <Card className="tab" id="content-tab">
          <Initialization />
        </Card>
        <Card className="tab ms-2">
          <Card.Body>Nice one</Card.Body>
        </Card>
      </div >
    </>
  )
};

export default App;
