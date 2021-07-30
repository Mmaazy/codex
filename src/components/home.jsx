import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#252584" }}>
        <Navbar variant="light" className="mb-5">
          <div className="container">
            <Navbar.Brand href="#home">
              <img src="./images/logo.png" alt="" />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="" style={{ color: "white" }} className="ml-1">Home</Link>
              <Link to="/graph" style={{ color: "white" }} className="ml-4">Graph</Link>
              <Link to="/jsondata" style={{ color: "white" }} className="ml-4">Pictures</Link>
              <Link to="/tracker" style={{ color: "white" }} className="ml-4">Tracker</Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </div>
        </Navbar>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div style={{ color: "white" }}>
                <h1>Make development</h1>
                <h1>easy with us.</h1>
              </div>

              <p className="mt-2" style={{ color: "white" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, perspiciatis non. Veniam nulla eaque eos?
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <img src="images/banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
