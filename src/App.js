import React, { useEffect } from "react";
import NavHeader from "./components/NavHeader.js";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import Composition from "./components/video/Composition.js";
import SearchBar from "./components/search/SearchBar.js";

const App = () => {
  console.log(process.env.REACT_APP_YT_KEY);
  console.log();

  return (
    <React.Fragment>
      <NavHeader />
      <br></br>
      <Container>
        <Row className="mb-2">
          <SearchBar />
        </Row>
        <Row>
          <Composition />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
