import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import Modal from "./modal";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand style={{ color: "#252584" }}>
            {" "}
            {/* <img className="px-3" src="images/happy-face.svg" alt="" /> */}
            <h1>Our important people is listed here</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Button className="mx-1" 
            variant="outline-warning"
            onClick={() => setModalShow(true)}
            >
              Edit
            </Button>{" "}
            <Button
              variant="outline-primary"
              onClick={() => setModalShow(true)}
            >
              {" "}
              Add
            </Button>{" "}
            <Modal show={modalShow} onHide={() => setModalShow(false)} />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
