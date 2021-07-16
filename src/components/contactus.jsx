import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
    <div className="container mt-5 mb-5">
    <h2 className="text-center mt-5 mb-5" style={{ color: "#252584" }}>Contact Us</h2>
      <Row>
        <Col>
          <h5 className="mb-1" style={{ color: "#252584" }}>Name</h5>
          <Form.Control type="text" placeholder="Enter your name" />

          <h5 className=" mt-4 mb-1" style={{ color: "#252584" }}>Email</h5>
          <Form.Control type="text" placeholder="Enter your email" />

          <h5 className=" mt-4 mb-1" style={{ color: "#252584" }}>Subject</h5>
          <Form.Control type="text" placeholder="Enter your subject" />

          <h5 className=" mt-4 mb-1" style={{ color: "#252584" }}>Message</h5>
          <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
        </Col>
        <Col>2</Col>
      </Row>
    </div>
    </>
  );
};

export default ContactUs;
