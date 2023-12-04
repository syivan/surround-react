import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import SoundBox from "./SoundBox";
import { useState, useEffect } from "react";

const SoundBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    console.log("hello");
  }, [isPlaying]);

  function controlButton() {
    setIsPlaying(!isPlaying);
  }

  return (
    <React.Fragment>
      <Container>
        <Row lg={3} md={2} sm={1} className="mt-1">
          <Col>
            <SoundBox controlButton={controlButton} />
          </Col>
          {/* <Col>
            <SoundBox />
          </Col>
          <Col>
            <SoundBox />
          </Col> */}
        </Row>
        <Row lg={3} md={2} sm={1} className="mt-2 mb-3">
          {/* <Col>
            <SoundBox />
          </Col>
          <Col>
            <SoundBox />
          </Col>
          <Col>
            <SoundBox />
          </Col> */}
        </Row>
        <PlayBack />
      </Container>
    </React.Fragment>
  );
};

export default SoundBar;
