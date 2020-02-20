import React from "react";
import "./Work.css";
import { Container, Row, Col } from "react-bootstrap";
import work1 from "../../assets/images/1.jpg";
import work2 from "../../assets/images/05.jpg";
import work3 from "../../assets/images/07.jpg";
import work4 from "../../assets/images/08.jpg";

function Work() {
  return (
    <section className="work-bg">
      <Container>
        <Row className="pb-4">
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
          <Col md={3}>
            <div>
              <img src={work1} className="work-img" alt="work1"/>
            </div>
          </Col>
          <Col md={3}>
          <div>
              <img src={work2} className="work-img" alt="work2"/>
            </div>
          </Col>
          <Col md={3}>
          <div>
              <img src={work3} className="work-img" alt="work3"/>
            </div>
          </Col>
          <Col md={3}>
          <div>
              <img src={work4} className="work-img" alt="work4"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Work;
