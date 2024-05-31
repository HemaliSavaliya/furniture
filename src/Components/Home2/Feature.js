import React from 'react';
import { FaStar } from "react-icons/fa6";
import { featureProducts } from '../../Common/Data/FurnitureData';

const Feature = () => {
  return (
    <section className="bg-light-grey-color-shade pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <h2 className="product__title">featured deals</h2>
            <p className="product__desc">
              Featured deals are exclusive and often limited time offers.
            </p>
            <div className="line"></div>
          </div>
        </div>
        <div className="row text-center pt-40">
          {featureProducts.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-3 card__space">
              <div className="featured-deals-item">
                <div className="image">
                  <img
                    src={product.image}
                    alt="Feature"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <div className="ratings text-grey">
                    {[...Array(product.rating).keys()].map((index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="name">{product.name}</p>
                  <div className="price">
                    <span className="old text-grey">$ {product.oldPrice}</span>
                    <span className="new text-brown">$ {product.newPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature;