import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import "../style.css";

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
    <Stack direction="horizontal" gap={3}>
      <Form.Control
        size="md"
        type="text"
        placeholder="Enter text here..."
        value={searchTerm}
        onChange={handleChange}
      ></Form.Control>
      <Button
        className="searchButton"
        type="input"
        size="sm"
        variant="primary"
        onClick={onSubmit}
      >
        Search
      </Button>
    </Stack>
  );
}
