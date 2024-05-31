import React, { useState } from 'react';
import { FaArrowsRotate, FaCartPlus, FaRegHeart, FaRegStarHalfStroke, FaSearchengin, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { productListData } from '../../Common/Data/FurnitureData';

const generateStars = (filledCount, halfFilledCount) => {
  const stars = [];

  for (let i = 0; i < filledCount; i++) {
    stars.push(<FaStar key={i} />);
  }

  for (let i = 0; i < halfFilledCount; i++) {
    stars.push(<FaRegStarHalfStroke key={`half-${i}`} />);
  }

  return stars;
};

const ProductList = () => {
  const [products, setProducts] = useState(productListData);

  const handleQuantityChange = (productId, value) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          const newQuantity = Math.max(1, product.quantity + (value === '+' ? 1 : -1));
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
    });
  };

  return (
    <div className="tab-pane" id="list-view">
      <div className="row shop-list">
        {products.map((product) => (
          <div key={product.id} className="col-lg-12">
            <div className="single-product clearfix">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="product-img">
                    <span className={`pro-label ${product.label}`}>
                      {product.label === 'new-label' ? 'New' : 'Sale'}
                    </span>
                    <Link to="/">
                      <img
                        src={product.imageUrl}
                        alt="Product"
                        className="img-fluid"
                        width="230"
                        height="153"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="product-info">
                    <div className="fix">
                      <h4 className="post-title floatleft">
                        <Link to="/">{product.name}</Link>
                      </h4>
                      <span className="pro-rating floatright">
                        <Link to="/" aria-label="star">
                          {generateStars(3, 2)}
                        </Link>
                        <span>(27 Rating)</span>
                      </span>
                    </div>
                    <div className="fix mb-20">
                      <span className="pro-price">$ {product.price}</span>
                    </div>
                    <div className="product-description">
                      <p>{product.description}</p>
                    </div>
                    <div className="clearfix">
                      <div className="cart-plus-minus">
                        <div
                          className="dec qtybutton"
                          onClick={() => handleQuantityChange(product.id, '-')}
                        >
                          -
                        </div>
                        <input
                          type="text"
                          value={product.quantity}
                          name="qtybutton"
                          className="cart-plus-minus-box"
                          readOnly
                        />
                        <div
                          className="inc qtybutton"
                          onClick={() => handleQuantityChange(product.id, '+')}
                        >
                          +
                        </div>
                      </div>
                      <div className="product-action clearfix">
                        <Link to="#" data-bs-toggle="tooltip" data-placement="top" title="Wishlist">
                          <FaRegHeart />
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModal"
                          title="Quick View"
                        >
                          <FaSearchengin />
                        </Link>
                        <Link to="#" data-bs-toggle="tooltip" data-placement="top" title="Compare">
                          <FaArrowsRotate />
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-placement="top"
                          title="Add To Cart"
                        >
                          <FaCartPlus />
                          <i className="fa-solid fa-cart-plus fa-sm"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;