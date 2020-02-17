import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hero from  "../../assets/images/hero_img.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={5} className="pad-top">
            <div className="temp-pad">
              <h1 className="hero-head">I'm Mukesh</h1>
              <p className="here-des">Freelance Web & Mobile UI/UX Designer</p>
              <input type="button" className="button-hire" value="Hire Me" />
            </div>
          </Col>
          <Col md={7}>
              <div>
                  <img src={hero} alt="hero"></img>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
