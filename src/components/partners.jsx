import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PartnersLogo = () => {
  return (
    <>
      <div className="container mt-5">
        <h1
          style={{ color: "#252584" }}
          className="d-flex flex-row justify-content-center"
        >
          We've worked with
        </h1>
        <div className="d-flex flex-row justify-content-between mt-3">
          <div className="p-2">
            <img src="images/apple.png" alt="" />
          </div>
          <div className="p-2">
            <img src="images/airbnb.png" alt="" />
          </div>
          <div className="p-2">
            <img src="images/google.png" alt="" />
          </div>
          <div className="p-2">
            <img src="images/nvidia.png" alt="" />
          </div>
          <div className="p-2">
            <img src="images/tesla.png" alt="" />
          </div>
          <div className="p-2">
            <img src="images/samsung.png" alt="" />
          </div>
          <div className="p-2">
            <img src="images/facebook.png" alt="" />
          </div>
          <div className="p-2">
            <img src="images/microsoft.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersLogo;
