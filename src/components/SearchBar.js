import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    console.log(searchTerm);
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    <Container fluid>
      <Form className="d-flex align-items-end">
        <Col>
          <Form.Control
            size="md"
            type="text"
            placeholder="Enter text here..."
            value={searchTerm}
            onChange={handleChange}
          ></Form.Control>
        </Col>
        <Col>
          <Button type="input" size="sm" variant="primary" onClick={onSubmit}>
            Search
          </Button>
        </Col>
      </Form>
    </Container>
  );
}
