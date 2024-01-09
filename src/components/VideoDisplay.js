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
import SearchBar from "./SearchBar";

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
      (data) =>
        setRelatedVideos(
          data.items
            .filter((item) => item.id.kind === "youtube#video")
            .slice(0, 36)
        )
    );
  }, [videoId]);

  if (!videoDetail?.snippet) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <SearchBar />
      <Stack
        direction={{ xs: "vertical", md: "horizontal" }}
        className="display-container"
      >
        <section className="full-content">
          <Container className="video-ambience-container">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls={true}
            />
            <h5 className="video-title">{videoDetail.snippet.title}</h5>
            <Stack direction="horizontal" gap={3}>
              <p className="channel-title">
                <span style={{ color: "red" }}>Channel:</span>{" "}
                {videoDetail.snippet.channelTitle}
              </p>
              <p className="video-metrics">
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
            <section>
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
            </section>
          </Stack>
        </section>
      </Stack>
    </React.Fragment>
  );
};

export default VideoDisplay;
