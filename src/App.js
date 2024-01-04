import React from "react";
import NavHeader from "./components/NavHeader.js";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFeed from "./components/SearchFeed.js";
import VideoDisplay from "./components/VideoDisplay.js";
import Footer from "./components/NavFooter.js";
import ".//style.css";
import Home from "./components/Home.js";
import About from "./components/About.js";

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
          <Route path="/video/:videoId" element={<VideoDisplay />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
