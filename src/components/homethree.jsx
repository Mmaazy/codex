import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Homethree = () =>{
    return(
        <>
        <div className="container">
            <Row>
                <Col className="mt-5">
                <div style={{ color: "#252584" }}>
                <h2>Easy access,</h2>
                <h2>Whenever, wherever</h2>
                <h2>you want</h2>
                </div>

                <p className="mt-2">Lorem, i am not going for consectetur adipisicing</p>
                <p>type ipsum dolor sit amet this should not be</p>
                <p>script ipsum dolor sit amet consectetur adipisicing</p>
                <p>doing ipsum dolor sit working not adipisicing</p>
                <p>working not adipisicing elit doing ipsum dolor sit </p>
                <p>type ipsum dolor sit amet this should not be</p>
             
                </Col>

                <Col>
                <img src="images/content-002.png" height="550px" alt=""/>
                </Col>
            </Row>
        </div>
        </>
    );
};

export default Homethree;