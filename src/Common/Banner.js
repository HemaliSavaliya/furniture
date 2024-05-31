import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading-banner">
            <div className="heading-banner-title">
              <h2>{props.title}</h2>
            </div>
            <div className="breadcumbs">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">{props.home}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;