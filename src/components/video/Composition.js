import React from "react";
import { Col } from "react-bootstrap";
import FrontVideo from "./FrontVideo";
import Suggestions from "./Suggestions";

export default function Composition() {
  return (
    <React.Fragment>
      <Col xs={8} lg={8} className="border border-primary">
        <FrontVideo />
      </Col>
      <Col className="border border-primary">
        <Suggestions />
      </Col>
    </React.Fragment>
  );
}
