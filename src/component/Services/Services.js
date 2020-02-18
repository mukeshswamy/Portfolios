import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import ph_icon from "../../assets/images/phone_icon.png";
import code_icon from "../../assets/images/code_icon.png";

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
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <Col md={6}>
            <div className="service-back">
              <div className="overlay">
                <div className="p-100">
                  <img src={ph_icon} alt="service-icon" className="ph-icon" />
                  <h3 className="heading-1">UX Research</h3>
                  <p style={{ color: "white" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="service-back2">
              <div className="overlay2">
                <div className="p-100">
                  <img src={code_icon} alt="service-icon" className="ph-icon" />
                  <h3 className="heading-1">Web Development</h3>
                  <p style={{ color: "white" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat
                  </p>
                </div>
              </div>
            </div>
            ß
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
