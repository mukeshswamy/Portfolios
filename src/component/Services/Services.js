import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

function Services() {
  return (
    <section className="service-section">
      <Container className="pt-top">
        <Row>
          <Col md={12}>
            <div className="service-div">
              <p className="service-head">Services</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="service-div">
              <p className="service-para">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natur
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
