import React from "react";
import NavHeader from "./components/NavHeader.js";
import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFeed from "./components/SearchFeed.js";
import VideoDisplay from "./components/VideoDisplay.js";
import Footer from "./components/Footer.js";
import ".//style.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Container>
        <SearchBar />
        <Routes>
          <Route path="/" element={<SearchFeed />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
          <Route path="/video/:videoId" element={<VideoDisplay />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
