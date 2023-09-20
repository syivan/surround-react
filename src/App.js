import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import SearchBar from "./components/SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleSubmit = (searchBarQuery) => {
    YTSearch(
      {
        key: process.env.API_KEY,
        term: searchBarQuery,
      },
      (videos) => {
        setVideos(videos);
        setCurrentVideo(videos[0]);
      }
    );
  };

  return (
    <>
      <Navbar className="navbarContainer bg-primary">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-white ms-3">
            Surround
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="main-container mt-2">
        <Card className="tab" id="content-tab">
          <SearchBar handleSearch={handleSubmit} />
          <VideoList videos={videos} />
        </Card>
        <Card className="tab ms-2">
          <Card.Body>Nice one</Card.Body>
        </Card>
      </div>
    </>
  );
};

export default App;
