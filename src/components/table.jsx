import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TableData = (props) => {
  return (
    <>
      <Container className="pt-5">
        <Row>
          <Col>{props.id}</Col>
          <Col>{props.title}</Col>
          <Col>{props.amount}</Col>
          <Col>{props.date}</Col>
        </Row>
      </Container>
    </>
  );
};

export default TableData;
