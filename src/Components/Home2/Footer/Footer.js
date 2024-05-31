import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { footerSections } from '../../../Common/Data/FurnitureData';
import logo from "../../../Assets/img/banner/logo.png";

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer pt-80 pb-80">
      <div className="container">
        <div className="block-widget-wrap">
          <div className="row">
            <div class="col-lg-3 col-md-6">
              <div class="block block-menu">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            {footerSections.map((section, index) => (
              <div key={index} className={section.colSize}>
                <div className="block block-menu">
                  <h2 className="block-title">{section.title}</h2>
                  <div className="block-content">
                    {index === 4 ? ( // First column
                      <p>{section.content}</p>
                    ) : index === footerSections.length - 1 ? ( // Last column
                      <>
                        <div className="newsletter-text">
                          {section.content}
                        </div>
                        <form action="#" method="post" className="newsletter-form">
                          <input type="email" name="your-email" size="40" placeholder="Email address" className="email" />
                          <span className="btn-submit">
                            <AiOutlineMail />
                          </span>
                        </form>
                      </>
                    ) : ( // Middle columns with links
                      <ul>
                        {section.links.map((link, i) => (
                          <li key={i}>
                            <Link to="/">{link}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;