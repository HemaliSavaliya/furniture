import React from 'react';
import Header from '../../Components/Home1/Header/Header';
import Footer from '../../Components/Home1/Footer/Footer';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="contact-us-area pt-80 pb-80">
        <div className="container">
          <div className="contact-us customer-login bg-white">
            <div className="col-xl-12 mb-20">
              <ContactForm />
            </div>
            <div className="row">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;