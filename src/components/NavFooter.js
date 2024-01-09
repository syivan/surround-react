import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="footer-section">
        <section className="copyright-statement">
          Copyright © {year}. All Rights Reserved.
        </section>
        <Row lg={2} md={2} xs={2} className="footer-links">
          <Link to="/search/Music Today">
            <li>Youtube Client</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </Row>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
