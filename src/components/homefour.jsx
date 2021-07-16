import React from "react";
import {Row, Col} from 'react-bootstrap';

const Homefour = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col className="">
            <img src="images/content-001.png" height="550px" alt="" />
          </Col>

          <Col className="mt-5">
            <div style={{ color: "#252584" }}>
              <h2>We can give you our</h2>
              <h2>best user experience</h2>
              <h2>to your system</h2>
            </div>

            <p className="mt-2">
              Lorem, i am not going for consectetur adipisicing
            </p>
            <p>type ipsum dolor sit amet this should not be</p>
            <p>script ipsum dolor sit amet consectetur adipisicing</p>
            <p>doing ipsum dolor sit working not adipisicing</p>
            <p>working not adipisicing elit doing ipsum dolor sit </p>
            <p>type ipsum dolor sit amet this should not be</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Homefour;
