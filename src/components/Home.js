import React from "react";
import { Container } from "react-bootstrap";
import SoundBox from "./SoundBox";
import SoundBar from "./SoundBar";

const Home = () => {
  return (
    <Container className="home-container">
      <h1>The Sound Ambience</h1>
      <h5>How you prefer it.</h5>
      <div>
        <SoundBar />
      </div>
    </Container>
  );
};

export default Home;
