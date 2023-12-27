import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";

const Loading = () => {
  return (
    <Container
      className="buffer-container"
    >
      <div className="spinner-container">
        <Spinner className="spinner" animation="border" />
      </div>
    </Container>
  );
};

export default Loading;
