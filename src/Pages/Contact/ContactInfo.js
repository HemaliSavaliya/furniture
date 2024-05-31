import React from 'react';
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <>
      <div className="col-lg-6 col-md-6">
        <div className="contact-details">
          <h1 className="title-1 title-border text-uppercase mb-30">
            contact details
          </h1>
          <ul>
            <li>
              <i><FaLocationDot /></i>
              <span>28 Green Tower, Street Name,</span>
              <span>New York City, USA</span>
            </li>
            <li>
              <i><FaPhone /></i>
              <span>+880 1234 123456</span>
              <span>+880 1234 123456</span>
            </li>
            <li>
              <i><FaEnvelope /></i>
              <span>company-email@gmail.com</span>
              <span>your-email@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="send-message">
          <form id="contact-form" action="#">
            <h1 className="title-1 title-border text-uppercase mb-30">
              send message
            </h1>
            <input
              type="text"
              name="con_name"
              placeholder="Your name here..."
            />
            <input
              type="text"
              name="con_email"
              placeholder="Your email here..."
            />
            <textarea
              className="custom-textarea"
              name="con_message"
              placeholder="Your comment here..."
            ></textarea>
            <button
              className="button-one submit-button mt-20"
              data-text="submit message"
              type="submit"
              aria-label="Submit Message"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactInfo;