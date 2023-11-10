import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";

const VideoCard = ({
  item: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      style={{
        width: { md: "18px", xs: "100%" },
        borderRadius: "5px",
        overflow: "hidden",
      }}
      className="mb-3"
    >
      <Link to={`video/${videoId}`}>
        <Card.Img
          variant="top"
          src={`http://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          className="card-img"
          alt={snippet.title}
          style={{ height: "12rem" }}
        ></Card.Img>
      </Link>
      <Card.Body style={{ height: "100px" }}>
        <Link to={`video/${videoId}`} style={{ textDecoration: "none" }}>
          <Card.Title className="card-title">
            {snippet.title.length >= 42
              ? snippet.title.slice(0, 42) + "..."
              : snippet.title}
          </Card.Title>
        </Link>
        <Card.Text className="card-text">{snippet.channelTitle}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
