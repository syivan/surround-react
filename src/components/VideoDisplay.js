import React from "react";
import { Row, Col } from "react-bootstrap";
import VideoFront from "./video/VideoFront";
import Suggestions from "./video/Suggestions";

const VideoDisplay = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={8} lg={8} className="border border-primary">
          <VideoFront />
        </Col>
        <Col className="border border-primary">
          <Suggestions />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default VideoDisplay;
