import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-top pt-5" style={{backgroundColor:"#252584"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-1 pt-2">
              <img src="images/logo.png"/>
            </div>
            <div className="col-md-3 pt-4 ml-3">
              <h3 style={{ color: "white" }}>Easy work</h3>
            </div>
            <div className="col-md-3">
              <h6 style={{ color: "white" }}>Address</h6>
              <p style={{ color: "white" }}>52-1, Jalan Awan Hijau, Taman, Overseas Union, 58200 Kuala Lumpur, Waliayah Persekutuan Kuala Lumpur</p>
            </div>
            <div className="col-md-3">
              <h6 style={{ color: "white" }}>Contact <p>03-7451 5283</p></h6>

              <h6 style={{ color: "white" }}>Fax <p>03-7451 5283</p></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
