import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../style.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <Stack direction="horizontal" gap={3} className="search-section">
      <Form.Control
        size="md"
        type="text"
        placeholder="Enter text here..."
        value={searchTerm}
        onChange={handleChange}
        className="search-bar"
        onKeyDown={handleKeyPress}
      ></Form.Control>
      <Button
        type="input"
        size="sm"
        variant="primary"
        onClick={onSubmit}
        className="search-button"
      >
        Search
      </Button>
    </Stack>
  );
}
