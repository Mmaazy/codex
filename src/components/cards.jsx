import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
// import CardImg from "../../public/images/happy-face.svg"
import Post from "../data/posts.json";
import ModalVertical from "./modal";

const Cards = (props) => {
  const data = "My name is Maaz";
  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-3">
          {Post.map((postDetail, index) => (
            <Col lg="2" className="mt-4" key={index}>
              <Card>
                {/* <Card.Img variant="top" src="../../images/tania-ferreira.jpg" /> */}
                <Card.Body>
                  <Card.Img variant="top" src={postDetail.image} />

                  <Card.Text className="text-center">
                    {postDetail.name}
                  </Card.Text>
                  <Card.Text className="text-center">
                    {postDetail.designation}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Button onClick={()=>props.Parenfunc(data)}>
            Click me
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Cards;


