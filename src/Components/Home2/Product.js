import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { topProducts } from '../../Common/Data/FurnitureData';

const Product = () => {
  return (
    <section className="bg-light-grey-color-shade pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <h2 className="product__title">top new products</h2>
            <p className="product__desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="line"></div>
          </div>
        </div>
        <div className="row text-center pt-40">
          {topProducts.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-3 card__space">
              <div className="new-product-item">
                <div className="image">
                  <img
                    src={product.image}
                    alt="Products"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <span className="badge">{product.badge}</span>
                </div>
                <div className="info">
                  <div className="ratings text-grey">
                    {[...Array(product.rating).keys()].map((index) => (
                      <FaStar key={index} />
                    ))}
                    <p className="pt-10">({product.reviews} Reviews)</p>
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
  );
};

export default Product;