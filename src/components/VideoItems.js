import React from "react";
import { Row, Container } from "react-bootstrap";
import VideoCard from "./VideoCard";

const VideoItems = ({ videos }) => {
  console.log(videos);

  const videoMap = videos.map((item, index) => (
    <Container key={index}>
      <VideoCard item={item} />
    </Container>
  ));

  return (
    // <Row
    //   className="d-inline-flex flex-wrap justify-content-start gap-2"
    //   direction="horizontal"
    // >
    //   {videoMap}
    // </Row>
    <Row md={3} lg={4} xs={2} className="">
      {videoMap}
    </Row>
  );
};

export default VideoItems;
