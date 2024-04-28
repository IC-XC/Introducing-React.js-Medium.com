import React from "react";
import phoneImage from "../images/phone.png";
function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h6 className="text-secondary">The phone revolution</h6>
          <h2>The First Phone</h2>
          <p className="text-secondary">
          In 1999, the Japanese firm NTT DoCoMo released the first smartphones to achieve mass adoption within a country. 
          Smartphones became widespread in the late 2000s. 
          Most of those produced from 2012 onward have high-speed mobile broadband 4G LTE, motion sensors, and mobile payment features. 
          In the third quarter of 2012, one billion smartphones were in use worldwide. 
          Global smartphone sales surpassed the sales figures for regular cell phones in early 2013.
          </p>
          <button className="btn btn-primary mt-5">Buy Now</button>
        </div>
        <div className="col-md-6">
          <img
            src={phoneImage}
            alt="Product"
            className="img-fluid product-image"
          />
          <div className="image-credits">
            Image by{" "}
            <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=153650">
              OpenClipart-Vectors
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=153650">
              Pixabay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;