import React from 'react';
import Header from '../../Components/Home1/Header/Header';
import Footer from '../../Components/Home1/Footer/Footer';
import aboutImg1 from "../../Assets/img/about/about-us-1.jpg";
import signature from "../../Assets/img/about/right-sidebar-member-signature.png";
import Gallery from './Gallery';
import Team from './Team';
import Banner from '../../Common/Banner';

const About = () => {
  window.scrollTo(0, 0);
  
  return (
    <>
      <Header />

      <div className="about-banner-area overlay-bg">
        <Banner
          home="home"
          title="about us"
        />
      </div>

      <section className="story-about-section section-box">
        <div className="story-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="images">
                  <img
                    src={aboutImg1}
                    alt="About story"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                <div className="story-detail">
                  <h2 className="special-heading">Our Story</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud commodo
                    consequat sit voluptatem accusantium doloremque
                    laudantium.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="info">
                    <div className="images">
                      <img
                        src={signature}
                        alt="signatures"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                    <div className="author">
                      <span className="name">Catherine Shaw</span>
                      <span className="job">- Director -</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Team />
      <Footer />
    </>
  )
}

export default About;