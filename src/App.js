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
      <Container className="mx-5">
        <Row className="mb-2">
          <SearchBar />
        </Row>
        <Routes>
          <Route path="/" element={<SearchFeed />}></Route>
          <Route path="/Search/:searchTerm" element={<VideoDisplay />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
