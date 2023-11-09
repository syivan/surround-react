import React from "react";
import VideoItems from "./VideoItems";
import { fetchAPI } from "../utils/fetchAPI.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState(`dance`);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="mx-5">
      <VideoItems videos={videos} />
    </div>
  );
};

export default SearchFeed;
