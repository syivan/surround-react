import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../style.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate("");

  const handleChange = (event) => {
    console.log(searchTerm);
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }

    setSearchTerm("");
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
