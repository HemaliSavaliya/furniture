import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import { FaRegLightbulb, FaCouch } from "react-icons/fa6";
import feature1 from "../../Assets/img/feature/fea-1.jpg";
import feature2 from "../../Assets/img/feature/fea-2.jpg";
import feature3 from "../../Assets/img/feature/fea-3.jpg";
import feature4 from "../../Assets/img/feature/fea-4.jpg";
import feature5 from "../../Assets/img/feature/acce-1.jpg";
import feature6 from "../../Assets/img/feature/acce-2.jpg";
import feature7 from "../../Assets/img/feature/acce-3.jpg";
import feature8 from "../../Assets/img/feature/acce-4.jpg";
import feature9 from "../../Assets/img/feature/acce-5.jpg";
import feature10 from "../../Assets/img/feature/acce-6.jpg";

const Feature = () => {
  return (
    <div className="container pb-90">
      <div className="row text-center">
        <div className="col-xl-12">
          <div className="fa-title">Featured Product</div>
          <p className="fa-sub-title">
            A fusion of comfort, style and quality without compromise. An
            investment in unrivalled
            <br />
            craftsmanship and design to make your home a very special place
          </p>
        </div>
      </div>
      <div className="d-lg-flex d-md-block">
        <div className="col-xl-6 col-lg-6">
          <Swiper
            direction="horizontal"
            loop={true}
            spaceBetween={60}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            dir='rtl'
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="fea-img">
                <img
                  className="hover-image img-fluid"
                  src={feature1}
                  alt="Feature"
                  width="558"
                  height="519"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fea-img">
                <img
                  className="hover-image img-fluid"
                  src={feature2}
                  alt="Feature"
                  width="558"
                  height="519"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="col-xl-6 col-lg-6 fea-card-img">
          <div className="d-lg-flex justify-content-between d-md-block">
            <div className="col-xl-6 col-lg-6 feature-img">
              <img
                className="hover-image img-fluid"
                src={feature8}
                alt="Feature"
                width="279"
                height="247"
                loading="lazy"
              />
            </div>
            <div className="col-xl-6 col-lg-6 feature-img">
              <img
                className="hover-image img-fluid"
                src={feature9}
                alt="Feature"
                width="279"
                height="247"
                loading="lazy"
              />
            </div>
          </div>
          <div className="d-lg-flex justify-content-between d-md-block">
            <div className="col-xl-6 col-lg-6 fea-card">
              <i><FaCouch /></i>
              <p>chair & sofa</p>
              <button className="fa-btn-shop" aria-label="Shop Now">
                shop now
              </button>
            </div>
            <div className="col-xl-6 col-lg-6 feature-img">
              <img
                className="hover-image img-fluid"
                src={feature10}
                alt="Feature"
                width="279"
                height="247"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-flex d-md-block">
        <div className="col-xl-6 col-lg-6 fea-card-img">
          <div className="d-lg-flex justify-content-between d-md-block">
            <div className="col-xl-6 col-lg-6 feature-img">
              <img
                className="hover-image img-fluid"
                src={feature5}
                alt="Accessories"
                width="279"
                height="247"
                loading="lazy"
              />
            </div>
            <div className="col-xl-6 col-lg-6 feature-img">
              <img
                className="hover-image img-fluid"
                src={feature6}
                alt="Accessories"
                width="279"
                height="247"
                loading="lazy"
              />
            </div>
          </div>
          <div className="d-lg-flex justify-content-between d-md-block">
            <div className="col-xl-6 col-lg-6 fea-card">
              <i><FaRegLightbulb /></i>
              <p>Accessories</p>
              <button className="fa-btn-shop" aria-label="Shop Now">
                shop now
              </button>
            </div>
            <div className="col-xl-6 col-lg-6 feature-img">
              <img
                className="hover-image img-fluid"
                src={feature7}
                alt="Accessories"
                width="279"
                height="247"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6">
          <Swiper
            direction="horizontal"
            loop={true}
            spaceBetween={60}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            dir='ltr'
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="fea-img">
                <img
                  className="hover-image img-fluid"
                  src={feature3}
                  alt="Accessories"
                  width="558"
                  height="519"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fea-img">
                <img
                  className="hover-image mg-fluid"
                  src={feature4}
                  alt="Accessories"
                  width="558"
                  height="519"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Feature;