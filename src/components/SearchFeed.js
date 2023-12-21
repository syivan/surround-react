import React from "react";
import VideoItems from "./VideoItems";
import { fetchAPI } from "../utils/fetchAPI.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Paginate from "./Paginate";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPosts = videos.length;

  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(videos.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items.filter((item) => item.id.kind === 'youtube#video').slice(0, 36)))
      .catch(console.log("PROMISE FAILED"));

    setCurrentPage(1);
  }, [searchTerm]);

  console.log(videos);

  return (
    <React.Fragment>
      <div className="mx-5">
        <h3 className="search-banner">
          Search Results for: <span style={{ color: "red" }}>{searchTerm}</span>
        </h3>
        <VideoItems
          videos={videos.slice(
            postsPerPage * (currentPage - 1),
            postsPerPage * currentPage
          )}
        />
      </div>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        previousPage={previousPage}
        paginate={paginate}
        nextPage={nextPage}
      />
    </React.Fragment>
  );
};

export default SearchFeed;
