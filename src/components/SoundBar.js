import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import SoundBox from "./SoundBox";
import { useState, useEffect } from "react";
import PlayControl from "./PlayControl";
import { data } from "../files";

const SoundBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  function controlButton() {
    setIsPlaying(!isPlaying);
  }

  return (
    <React.Fragment>
      <Container>
        <Row lg={3} md={2} sm={1} className="mt-1">
          <SoundBox
            key={1}
            playOn={isPlaying}
            data={data[0]}
            playerID={data[0].playerID}
          />
          <SoundBox
            key={2}
            playOn={isPlaying}
            data={data[1]}
            playerID={data[1].playerID}
          />
          <SoundBox
            key={3}
            playOn={isPlaying}
            data={data[2]}
            playerID={data[2].playerID}
          />
          <SoundBox
            key={4}
            playOn={isPlaying}
            data={data[3]}
            playerID={data[3].playerID}
          />
          <SoundBox
            key={5}
            playOn={isPlaying}
            data={data[4]}
            playerID={data[4].playerID}
          />
          <SoundBox
            key={6}
            playOn={isPlaying}
            data={data[5]}
            playerID={data[5].playerID}
          />
        </Row>
      </Container>
      <div className="play-section">
        <div className="play-button-section">
          <PlayControl button={controlButton} status={isPlaying} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SoundBar;
