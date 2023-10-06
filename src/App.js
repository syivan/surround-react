import React, { useState } from "react";
import NavHeader from "./components/NavHeader.js";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";

const App = () => {
  return (
    <>
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
          <Col xs={8} lg={8} className="border border-primary">
            Video
          </Col>
          <Col className="border border-primary">Suggestions</Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
