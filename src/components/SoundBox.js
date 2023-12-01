import React from "react";
import { useState, useEffect } from "react";
import "../style.css";

const SoundBox = () => {
  const [volume, setVolume] = useState(0);
  const [playing, isPlaying] = useState(true);

  useEffect(() => {
    let audioPlayer = document.getElementById("audio-player");

    if (volume >= 0.02 && isPlaying) {
      audioPlayer.volume = volume;
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }, [volume]);
  return (
    <div className="d-flex justify-content-center">
      <img
        src={require(`./..//static/img/rain.png`)}
        height={100}
        width={100}
      ></img>
      <div
        style={{
          margin: "auto",
          marginLeft: "0",
        }}
      >
        <h3 className="ms-2 sound-label">Rain</h3>
        <input
          type="range"
          min="0"
          max="1"
          step="0.02"
          className="slider"
          id="rain-slider"
          value={volume}
          onChange={(e) => {
            setVolume(e.target.value);
          }}
        ></input>

        {
          <audio autoPlay={false} preload="auto" id="audio-player">
            <source
              src={require("./..//static/audio/rain.mp4")}
              type="audio/mp4"
            ></source>
          </audio>
        }
      </div>
    </div>
  );
};

export default SoundBox;
