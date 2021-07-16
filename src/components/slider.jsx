import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const SliderCard = () => {
  return (
    <div className="container mt-5">
      <h2  style={{ color: "#252584" }}>What other people say about</h2>
      <h2  style={{ color: "#252584" }}>our services</h2>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>David Champion</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                CEO of iCloud
              </Card.Subtitle>
              <Card.Text>
                "System is excellent.It has made my system user
                 experience to become one of the easiest"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>David vank Frank Hord</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                CEO of Marks.co
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Lucas Bond</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                BOD of Skyscanner
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SliderCard;
