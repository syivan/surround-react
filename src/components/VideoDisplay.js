import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { fetchAPI } from "../utils/fetchAPI";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const VideoDisplay = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [videoId]);

  if (!videoDetail?.snippet) {
    return (
      <Container
        style={{ width: "100%", height: "20rem" }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="align-items-center justify-content-center">
          <Spinner className="d-flex align-items-center" animation="border" />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Stack direction={{ xs: "vertical", md: "horizontal" }} className="mt-3">
        <Container className="d-flex">
          <Container
            style={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls={true}
            />
            <h5>{videoDetail.snippet.title}</h5>
          </Container>
        </Container>
      </Stack>
    </Container>
    // <div className="mx-5">
    //   <Row>
    //     <Col xs={8} lg={8} className="border border-primary">
    //       <div>
    //         <iframe
    //           width="560"
    //           height="315"
    //           src="https://www.youtube.com/embed/OmCXwRjvDRo?si=AOMj7lpzY6fdCPI9"
    //           title="YouTube video player"
    //           frameborder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //           allowfullscreen
    //         ></iframe>
    //       </div>
    //       <div>
    //         <div>Title Title</div>
    //         <div>Description Description</div>
    //       </div>
    //     </Col>
    //     <Col className="border border-primary">
    //       <Suggestions />
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default VideoDisplay;
