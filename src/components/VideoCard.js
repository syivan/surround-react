import React from "react";
import { Card } from "react-bootstrap";
import "../style.css";

const VideoCard = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={item.snippet.thumbnails.high["url"]}
        className="card-img"
      ></Card.Img>
      <Card.Body>
        <Card.Title>{item.snippet.title}</Card.Title>
        <Card.Text>{item.snippet.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
