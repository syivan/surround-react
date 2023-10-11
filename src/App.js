import React, { useState } from "react";
import NavHeader from "./components/NavHeader.js";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import Composition from "./components/video/Composition.js";

const App = () => {
  return (
    <React.Fragment>
      <NavHeader />
      <br></br>
      <Container>
        <Row>
          <Form>
            <Row>
              <Col xs={10} className="border border-primary">
                <Form.Control
                  size="md"
                  type="text"
                  placeholder="Enter text here..."
                ></Form.Control>
              </Col>
              <Col className="border border-primary">
                <Button size="sm" variant="primary">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
        <Row>
          <Composition />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
