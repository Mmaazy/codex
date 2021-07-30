import React from "react";
import Practise from "../data/practise.json";
import {Container, Col, Row} from 'react-bootstrap';

const ShoppingCart = () => {
  console.log(Practise);
  return (
    <>
      <Container className="pt-5">
        <Row>
          <Col><h4>Filename</h4></Col>
          <Col><h4>Upload Time</h4></Col>
          <Col><h4>File size</h4></Col>
          <Col><h4>Algorithm</h4></Col>
          <Col><h4>File Count</h4></Col>
          <Col><h4>Upload Type</h4></Col>
          <Col><h4>File Type</h4></Col>
        </Row>
      </Container>
      
      <Container className="pt-2">
        
      {Practise.map((practise) =>(
          <Row>
          <Col className="mt-3">{practise.filename}</Col>
          <Col className="mt-3">{practise.uploadtime}</Col>
          <Col className="mt-3">{practise.filesize}</Col>
          <Col className="mt-3">{practise.algorithm}</Col>
          <Col className="mt-3">{practise.count}</Col>
          <Col className="mt-3">{practise.type}</Col>
          <Col className="mt-3">{practise.filetype}</Col>
          </Row>
      ))}
          
      </Container>
    </>
  );
};

export default ShoppingCart;
