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
    <Card style={{ width: { md: "18px", xs: "100%" } }} className="mb-3">
      <Link to={`video/${videoId}`}>
        <Card.Img
          variant="top"
          src={`http://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          className="card-img"
          alt={snippet.title}
          style={{ height: "10rem" }}
        ></Card.Img>
      </Link>
      <Card.Body style={{ height: "106px" }}>
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
