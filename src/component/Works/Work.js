import React from "react";
import "./Work.css";
import { Container, Row, Col } from "react-bootstrap";

function Work() {
  return (
    <section className="work-bg">
      <Container>
        <Row>
          <Col md={12}>
            <div className="work">
              <p>Works</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="work-dis">
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Work;
