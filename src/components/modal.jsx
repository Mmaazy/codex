import React from "react";
import { Button, Modal, Card, Image, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const ModalVertical = (props) => {

  const [name, setName] = useState('');
  //const [uName, setuName] = useState('');
  const [designation, setDesignation] = useState('');
  //const [uDesignation, setuDesignation] = useState('');
  
  useEffect(()=>{
    
  });

  const inputEvent = (event) =>{
    setName(event.target.value);
  
  };

  const inputDesignation = (event) =>{
    setDesignation(event.target.value);
  } 
  
  const handleAddUser = () =>{
     //setuName(name);
     //setuDesignation(designation);
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add People</Modal.Title>
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

        
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" value={name} onChange={inputEvent} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Designation</Form.Label>
                <Form.Control type="text" placeholder="Enter Position"  value={designation} onChange={inputDesignation} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Desscription</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  placeholder="Enter Description"
                />
              </Form.Group>
            </Form>
          
        </Card>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Cancel
        </Button>
        <Button onClick={()=>{handleAddUser()}}>
          Save
        </Button>
      </Modal.Footer> 
    </Modal>
  );
};

export default ModalVertical;
