import React from 'react';
import gallery1 from "../../Assets/img/about/about-us-gallery-1.jpg"
import gallery2 from "../../Assets/img/about/about-us-gallery-2.jpg"
import gallery3 from "../../Assets/img/about/about-us-gallery-3.jpg"
import gallery4 from "../../Assets/img/about/about-us-gallery-4.jpg"
import gallery5 from "../../Assets/img/about/about-us-gallery-5.jpg"

const Gallery = () => {
  return (
    <div className="gallery-about-section section-box">
      <div className="container-fluid">
        <div className="gallery-content">
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="images">
                    <img
                      src={gallery1}
                      alt="gallery-images"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                  <div className="images">
                    <img
                      src={gallery2}
                      alt="gallery-images"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                  <div className="images">
                    <img
                      src={gallery3}
                      alt="gallery-images"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="images">
                    <img
                      src={gallery4}
                      alt="gallery-images"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="images">
                <img
                  src={gallery5}
                  alt="gallery-images"
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;