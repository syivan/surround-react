import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    console.log(searchTerm);
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Form.Control
        size="md"
        type="text"
        placeholder="Enter text here..."
        value={searchTerm}
        onChange={handleChange}
      ></Form.Control>
    </div>
  );
}
