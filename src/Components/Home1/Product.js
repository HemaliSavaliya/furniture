import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../../Common/Data/FurnitureData';

const Product = () => {
  return (
    <div className="tp-product-4__area pt-90 pb-90">
      <div className="container">
        <div className="row">
          {productData.map((product, index) => (
            <div className="col-xl-6 col-lg-6 col-md-6 mb-30" key={index}>
              <div className="tp-product-4__item p-relative">
                <div className="tp-product-4__thumb">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="img-fluid"
                    width="546"
                    height="336"
                    loading="lazy"
                  />
                </div>
                <div className={product.contentClass}>
                  <h4 className="tp-product-4__title">{product.title}</h4>
                  <h4 className="tp-product-4__sub-title">
                    Starting from <b>${product.price}</b>
                  </h4>
                  <Link className={product.btnClass} to={product.link}>
                    {product.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;