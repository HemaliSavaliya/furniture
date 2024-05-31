import React from 'react';
import newBg from "../../Assets/img/news/news-bg.jpg";

const NewLetter = () => {
  return (
    <div className="container pb-90">
      <div className="d-lg-flex d-md-block">
        <div className="col-xl-8 col-lg-6 news-bg">
          <img
            src={newBg}
            alt="newsletter"
            className="img-fluid"
            width="744"
            height="357"
            loading="lazy"
          />
        </div>
        <div className="col-xl-4 col-lg-6 news__section">
          <div className="news__title">Join us</div>
          <div className="news__border"></div>
          <p className="news__subtitle">
            Subscribe to our newsletter & get <br />
            <b>15% discount</b> on your first purchase.
          </p>
          <form action="#">
            <input type="text" placeholder="Enter your email here.." />
          </form>
          <div>
            <button className="sub-btn" aria-label="subscribe">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLetter;