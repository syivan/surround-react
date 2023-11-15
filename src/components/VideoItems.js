import React from "react";
import { Row, Container } from "react-bootstrap";
import VideoCard from "./VideoCard";
import Loading from "./Loading";
import Stack from "react-bootstrap/Stack";

const VideoItems = ({ videos, direction }) => {
  console.log(videos);

  if (!videos?.length) return <Loading />;

  const videoMap = videos.map((item, index) => (
    <Container key={index}>
      <VideoCard item={item} />
    </Container>
  ));

  if (direction === "column") {
    return (
      <Stack direction="vertical" gap={1} style={{ width: "18rem" }}>
        {videoMap}
      </Stack>
    );
  } else {
    return (
      <Row md={3} lg={4} xs={2} className="mt-4">
        {videoMap}
      </Row>
    );
  }
};

export default VideoItems;
