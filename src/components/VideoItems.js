import React from "react";
import { Row, Container } from "react-bootstrap";
import VideoCard from "./VideoCard";
import Loading from "./Loading";
import Stack from "react-bootstrap/Stack";

const VideoItems = ({ videos, direction }) => {
  if (!videos?.length) return <Loading />;

  let size;
  if (direction === "column") {
    size = {
      imageSize: "8rem",
      titleSize: "10px",
      channelSize: "8px",
      bodySize: "4rem",
    };
  } else {
    size = {
      imageSize: "12rem",
      titleSize: "14px",
      channelSize: "14px",
      bodySize: "6rem",
    };
  }
  const videoMap = videos.map((item, index) => (
    <Container key={index}>
      <VideoCard item={item} size={size} />
    </Container>
  ));

  if (direction === "column") {
    return (
      <Stack direction="vertical" gap={1} style={{ width: "10rem" }}>
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
