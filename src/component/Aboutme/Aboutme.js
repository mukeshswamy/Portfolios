import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Aboutme.css";

function Aboutme() {
  return (
    <section className="aboutme-section">
      <Container className="cus-con-about">
        <Row>
          <Col md={4}>
            <div className="div-head-about">
              <p className="about-head">About Me</p>
            </div>
          </Col>
          <Col md={8}>
            <div className="div-para-about">
              <p className="about-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="about-para pad-bt-abt">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nu pariatur excepteur sint occaecat.
              </p>
              <input type="button" className="button-hire mt-ryt-abt" value="view works" />
              <input type="button" className="button-hire" value="Download CV" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Aboutme;
