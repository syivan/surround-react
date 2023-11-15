import React from "react";
import { Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { fetchAPI } from "../utils/fetchAPI";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import Loading from "./Loading";
import VideoItems from "./VideoItems";

const VideoDisplay = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [videoId]);

  if (!videoDetail?.snippet) {
    return <Loading />;
  }

  console.log(relatedVideos);
  return (
    <React.Fragment>
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
            <h5 className="mt-2 video-title">{videoDetail.snippet.title}</h5>
            <Stack direction="horizontal" gap={3}>
              <p className="channel-title">
                {videoDetail.snippet.channelTitle}
              </p>
              <p className="ms-auto">
                <Badge bg="light" text="dark">
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString() +
                    " "}
                  views
                </Badge>
              </p>
              <p>
                <Badge bg="light" text="dark">
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString() +
                    " "}
                  likes
                </Badge>
              </p>
            </Stack>
          </Container>
        </Container>
      </Stack>
      <Container className="justify-content-center align-items-center">
        <VideoItems videos={relatedVideos} direction={"column"} />
      </Container>
    </React.Fragment>
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
