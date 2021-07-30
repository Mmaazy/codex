import React from "react";
import { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import './css/tracker.css';

const Tracker = () => {
  const [data, setData] = useState([]);

  const currdate = new Date().toLocaleDateString();
  const currtime = new Date().toLocaleTimeString();

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container mt-5">
      <h1
          style={{ color: "#252584" }}
          className="d-flex flex-row justify-content-center"
        >
          Live covid detector
        </h1>
        <p className="d-flex flex-row justify-content-center">Current date: {currdate}</p>
        <p className="d-flex flex-row justify-content-center">Current date: {currtime}</p>
        <Container className="mt-3">
          <Row>
            <Col>
              <Card bg="success" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">Our COUNTRY</Card.Title>
                  <Card.Title className="text-center">Pakistan</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="primary" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">Total RECOVERED</Card.Title>
                  <Card.Title className="text-center">{data.recovered}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card bg="warning" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">Total CONFIRMED</Card.Title>
                  <Card.Title className="text-center">{data.confirmed}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col>
              <Card bg="danger" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">Total DEATHS</Card.Title>
                  <Card.Title className="text-center">{data.deaths}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="info" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">Total ACTIVE</Card.Title>
                  <Card.Title className="text-center">{data.active}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card bg="secondary" text="white" style={{ width: "18rem" }} className="mb-5">
                <Card.Body>
                  <Card.Title className="text-center">Last UPDATED</Card.Title>
                  {<Card.Title className="text-center">{data.lastupdatedtime}</Card.Title>}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Tracker;
