import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'; // core Swiper
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { slides } from '../../Common/Data/FurnitureData';

const Hero = () => {
  return (
    <div className="container-fluid bg-light pb-90">
      <div className="row align-items-center">
        <div className="fa-service__wrapper d-lg-flex d-md-block">
          <div className="col-xl-5 col-lg-6 align-self-center">
            <div className="tp-hero__left-box z-index">
              <div className="tp-hero__section-box">
                <span className="tp-hero-subtitle">
                  We solve your problems about
                </span>
                <h3 className="tp-hero-title">Furniture</h3>
              </div>
              <div className="tp-hero__left-text">
                <p>
                  We make stylish furniture & work <br />
                  accessories for people who want to improve <br />
                  their health, wellbeing and office interiors.
                </p>
                <button className="tp-btn-brown" aria-label="See Collection">
                  see collection
                </button>
              </div>
            </div>
          </div>

          <div className="fa-slider__arrow-box-prev d-xxl-block">
            <div className="swiper-button-prev">
              <button aria-label="left">
                <FaCaretLeft />
              </button>
            </div>
          </div>

          <Swiper
            direction="horizontal"
            loop={true}
            spaceBetween={60}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Autoplay, Navigation]}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="col-xl-12 text-end fa-slider">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="fa-slider__arrow-box d-xxl-block">
            <div className="swiper-button-next">
              <button aria-label="right">
                <FaCaretRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;