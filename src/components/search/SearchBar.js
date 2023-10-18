import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
    <React.Fragment>
      <Form className="d-flex align-items-end">
        <Form.Control
          size="md"
          type="text"
          placeholder="Enter text here..."
          value={searchTerm}
          onChange={handleChange}
        ></Form.Control>
        <Button type="input" size="sm" variant="primary" onClick={onSubmit}>
          Search
        </Button>
      </Form>
    </React.Fragment>
  );
}
