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
      imageSize: "7.5rem",
      titleSize: "0.8rem",
      channelSize: "10px",
      bodySize: "5.5rem",
    };
  } else {
    size = {
      imageSize: "12rem",
      titleSize: "1rem",
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
      <Stack
        direction="vertical"
        gap={1}
        style={{ width: "16rem", paddingLeft: "12px" }}
      >
        {videoMap}
      </Stack>
    );
  } else {
    return (
      <Row md={2} lg={3} xs={1} className="search-feed-view">
        {videoMap}
      </Row>
    );
  }
};

export default VideoItems;
