import React from "react";
import { Nav, Navbar, Form, FormControl} from "react-bootstrap";

const Home = () => {
  return (
    <>
 
  <Navbar variant="light">
  <div className="container">
    <Navbar.Brand href="#home"><img src="./images/logo.png" alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About Us</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Careers</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
    </div>
  </Navbar>
  

    </>
  );
};

export default Home;
