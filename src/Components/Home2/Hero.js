import React from 'react';
import { Link } from 'react-router-dom';
import sofa from "../../Assets/img/hero/header-sofa-img.png";

const Hero = () => {
  return (
    <div className="bg-light-brown pt-90 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <h1 className="heading">Best Design of Furniture Collection</h1>
            <p className="text__desc">
              Improve the atmosphere through interior design that is driven by
              purposes to bring value into your environment
            </p>
            <Link to="/Home2" className="btn-header text-white">shop now</Link>
          </div>
          <div className="col-lg-6 col-md-6 hero__space">
            <img
              src={sofa}
              alt="Sofa"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;