import React, { useEffect } from "react";
import NavHeader from "./components/NavHeader.js";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import SearchBar from "./components/SearchBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFeed from "./components/SearchFeed.js";
import VideoDisplay from "./components/VideoDisplay.js";

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Row className="mx-5">
        <SearchBar />
      </Row>
      <Routes>
        <Route path="/" element={<SearchFeed />}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        <Route path="/video/:videoId" element={<VideoDisplay />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
