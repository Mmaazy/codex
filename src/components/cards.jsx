import React from "react";
import { Card, Container, Row, Col} from "react-bootstrap";
import Post from "../data/posts.json";
import { useEffect} from "react";
import { FaTrash } from "react-icons/fa";


const Cards = (props) => {

  useEffect(()=>{
    
  });

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-3">
          {Post.map((postDetail, index) => (
            <Col lg="2" className="mt-4" key={index}>
              <Card>
                  <Card.Img variant="top" src={postDetail.image}/>
                  <Card.Text className="text-center mt-2">
                    {postDetail.name}
                  </Card.Text>
                  <Card.Text className="text-center mb-2">
                    {postDetail.designation}
                  </Card.Text>
               
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
        </Row>
      </Container>

     
    </>
  );
};

export default Cards;


