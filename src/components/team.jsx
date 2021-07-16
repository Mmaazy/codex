import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Button,
  Container,
  Modal,
  Form,
  Card,
  Col,
  Image,
  Row
} from "react-bootstrap";
import Post from "../data/posts.json";
import { useState } from "react";
import { FaTrash, FaTimes } from "react-icons/fa";

const Team = () => {
    const [modalShow, setModalShow] = useState(false);
    const [fname, setFullName] = useState("");
    const [btnDel, setBtnDel] = useState(false);
    //const [description, setDescription] = useState();
    //const [designation, setDesignation] = useState();
  
    const onHide = () => {
      setModalShow(false);
    };
  
    const show = () => {
      setModalShow(true);
    };
  
    const inputEvent = (e) => {
      console.log(e.target.value);
    };
  
    const onSubmit = (e) =>{
      e.preventDefault();
      setFullName(fname)
    };
  
  
    return (
      <>
        <Navbar bg="light" variant="light" className="mt-5">
          <Container>
            <Navbar.Brand style={{ color: "#252584" }}>
              {" "}
              <h2>Our important people is listed</h2>
              <h2>here</h2>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Button className="mx-1" variant="outline-warning" onClick={() => setBtnDel(true)}>
                Edit
              </Button>{" "}
              <Button variant="outline-primary" onClick={show}>
                {" "}
                Add
              </Button>{" "}
            </Nav>
          </Container>
          
        </Navbar>
  
  {/* { btnDel ? (<div>
            <button onClick={() => setBtnDel(false)}>close</button>
          <FaTrash/>
          </div>) : null} */}

<Container>
        <Row className="justify-content-md-center mt-3">
          {Post.map((postDetail, index) => (
            <Col lg="2" className="mt-4" key={index}>
              <Card>
              { btnDel ? (<div>
                <FaTimes onClick={()=>setBtnDel(false)}/>
          <FaTrash/>
          </div>) : null}
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
          
        
  
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShow}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add People
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="m-auto">
            <Card style={{ width: "20rem" }}>
              <Col xs={6} md={12} className="text-center mt-4">
                <Image
                  style={{ height: "7rem" }}
                  src="images/user.png"
                  roundedCircle
                />
              </Col>
  
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      value={fname}
                      onChange={inputEvent}
                    />
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formBasicDesignation">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Position"
                      //value={designation}
                      onChange={inputEvent}
                    />
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{ height: "100px" }}
                      placeholder="Enter Description"
                      //value={description}
                      onChange={inputEvent}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="light" onClick={onHide}>
              Cancel
            </Button>
            <Button
            onClick={onSubmit}
            >Save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default Team;