import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";

const Loading = () => {
  return (
    <Container
      style={{ width: "100%", height: "20rem" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="align-items-center justify-content-center">
        <Spinner className="d-flex align-items-center" animation="border" />
      </div>
    </Container>
  );
};

export default Loading;
