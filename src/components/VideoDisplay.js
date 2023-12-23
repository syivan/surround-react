import React from "react";
import { Accordion, Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { fetchAPI } from "../utils/fetchAPI";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import Loading from "./Loading";
import VideoItems from "./VideoItems";
import Paginate from "./Paginate";
import "../style.css";
import SoundBar from "./SoundBar";

const VideoDisplay = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { videoId } = useParams();
  const postsPerPage = 4;
  const totalPosts = relatedVideos.length;
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`).then(
      (data) => setRelatedVideos(data.items.filter((item) => item.id.kind === 'youtube#video'))
    );
  }, [videoId]);

  if (!videoDetail?.snippet) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <Stack direction={{ xs: "vertical", md: "horizontal" }} className="display-container">
        <div className="d-flex">
          <Container className="video-ambience-container">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls={true}
            />
            <h5 className="mt-3 video-title">{videoDetail.snippet.title}</h5>
            <Stack direction="horizontal" gap={3}>
              <p className="channel-title">
                <span style={{ color: "red" }}>Channel:</span>{" "}
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
            <Accordion className="accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>A Sound Ambience</Accordion.Header>
                <Accordion.Body>
                  <SoundBar />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
          <Stack>
            <div>
              <VideoItems
                videos={relatedVideos.slice(
                  postsPerPage * (currentPage - 1),
                  postsPerPage * currentPage
                )}
                direction={"column"}
              />
              <Paginate
                postsPerPage={4}
                totalPosts={totalPosts}
                currentPage={currentPage}
                nextPage={nextPage}
                previousPage={previousPage}
              />
            </div>
          </Stack>
        </div>
      </Stack>
    </React.Fragment>
  );
};

export default VideoDisplay;
