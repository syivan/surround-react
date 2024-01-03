import React from "react";
import { Row } from "react-bootstrap";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="footer-section">
        <div>Copyright © {year}. All Rights Reserved.</div>
        <Row lg={2} md={2} xs={2} className="footer-links">
          <li>hi</li>
          <li>hello</li>
        </Row>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
