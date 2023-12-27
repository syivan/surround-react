import React from "react";
import { useState, useEffect } from "react";
import "../style.css";

const SoundBox = ({ playOn, data, playerID }) => {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    let audioPlayer = document.getElementById(playerID);
    audioPlayer.volume = volume;

    if (volume >= 0.02 && playOn) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }, [volume, playOn]);

  return (
    <div className="sound-box-container">
      <img
        src={require(`./..//static/img/${data.imageID}`)}
        height={100}
        width={100}
        alt={data.name}
        className="icon-prop"
      ></img>
      <div
        style={{
          margin: "auto",
          marginLeft: "0",
        }}
      >
        <h3 className="sound-label">{data.name}</h3>
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
          <audio preload="auto" id={playerID} loop>
            <source
              src={require(`./..//static/audio/${data.audioID}`)}
              type="audio/mp4"
            ></source>
          </audio>
        }
      </div>
    </div>
  );
};

export default SoundBox;
