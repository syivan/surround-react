import React from "react";
import "../../style.css";

export default function VideoFront() {
  return (
    <React.Fragment>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OmCXwRjvDRo?si=AOMj7lpzY6fdCPI9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <div>Title Title</div>
        <div>Description Description</div>
      </div>
    </React.Fragment>
  );
}
