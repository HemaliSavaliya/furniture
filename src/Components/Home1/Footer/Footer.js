import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaClock } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { aboutUsLinks, socialMediaLinks } from '../../../Common/Data/FurnitureData';
import CopyRight from './CopyRight';
import logo from "../../../Assets/img/banner/logo.png";

const Footer = () => {
  return (
    <footer className="footer-one">
      <div className="inner-footer">
        <div className="container">
          <div className="col-lg-12 col-xs-12 pt-90 pb-90">
            <div className="row">
              <div className="col-lg-4 col-sm-12 col-xs-12">
                <div className="block">
                  <div className="block-content">
                    <p className="title-block">
                      <img src={logo} alt="logo" />
                    </p>
                    <p className="content-logo">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                  </div>
                </div>
                <div className="block">
                  <div className="block-content">
                    <ul>
                      {aboutUsLinks.map((link, index) => (
                        <li key={index}>
                          <Link to="">{link}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 footer-top-pb">
                <div className="block m-top">
                  <div className="title-block">
                    Contact Us
                  </div>
                  <div className="block-content">
                    <div className="contact-us">
                      <div className="title-content">
                        <i><AiFillHome /></i>
                        <span>Address :</span>
                      </div>
                      <div className="content-contact address-contact">
                        <p>123 Suspendis matti, Visaosang Building VST District NY Accums, North American
                        </p>
                      </div>
                    </div>
                    <div className="contact-us">
                      <div className="title-content">
                        <i><FaEnvelope /></i>
                        <span>Email :</span>
                      </div>
                      <div className="content-contact mail-contact">
                        <p>support@domain.com</p>
                      </div>
                    </div>
                    <div className="contact-us">
                      <div className="title-content">
                        <i><FaPhone /></i>
                        <span>Hotline :</span>
                      </div>
                      <div className="content-contact phone-contact">
                        <p>+0012-345-67890</p>
                      </div>
                    </div>
                    <div className="contact-us">
                      <div className="title-content">
                        <i><FaClock /></i>
                        <span>Opening Hours :</span>
                      </div>
                      <div className="content-contact hours-contact">
                        <p>Monday - Sunday / 08.00AM- 10.00PM</p>
                        <span>(Except Holidays)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tiva-modules col-lg-4 col-md-6 footer-top-pb">
                <div className="block m-top">
                  <div className="block-content">
                    <div className="title-block">Newsletter</div>
                    <div className="sub-title">Sign up to our newsletter to get the latest articles, lookbooks voucher codes direct to your inbox
                    </div>
                    <div className="block-newsletter">
                      <form action="index.html" method="post">
                        <div className="input-group">
                          <input type="text" className="form-control bg-white" name="email" placeholder="Enter Your Email" />
                          <span className="input-group-btn">
                            <button className="effect-btn btn btn-secondary " name="submitNewsletter" type="submit">
                              <span>subscribe</span>
                            </button>
                          </span>
                        </div>
                        <input type="hidden" name="action" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="block m-top1">
                  <div className="block-content">
                    <div className="social-content">
                      <div className="title-block">
                        Follow us on
                      </div>
                      <div id="social-block">
                        <div className="social">
                          <ul className="list-inline d-flex">
                            {socialMediaLinks.map((item, index) => (
                              <li className="list-inline-item mb-0" key={index}>
                                <Link to={item.link} target="_blank" aria-label="social">
                                  {item.icon}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  )
}

export default Footer;