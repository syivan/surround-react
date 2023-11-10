import React from "react";
import VideoItems from "./VideoItems";
import { fetchAPI } from "../utils/fetchAPI.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState(`popular`);
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <React.Fragment>
      <div className="mx-5">
        <h2 className="search-banner">
          Search Results for <span style={{ color: "red" }}>{searchTerm}</span>
        </h2>
        <VideoItems videos={videos} />
      </div>
    </React.Fragment>
  );
};

export default SearchFeed;
