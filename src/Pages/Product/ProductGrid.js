import React from 'react';
import { FaArrowsRotate, FaCartPlus, FaRegHeart, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { productGridData } from '../../Common/Data/FurnitureData';

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

const ProductGrid = () => {
  return (
    <div className="tab-pane active" id="grid-view">
      <div className="row">
        {productGridData.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-20">
            <div className="category">
              <div className="ht__cat__thumb">
                <Link to="/">
                  <img
                    src={product.imageUrl}
                    alt="Product"
                    className="img-fluid"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="fr__hover__info">
                <ul className="product__action">
                  <li><Link to="/"><FaRegHeart /></Link></li>
                  <li><Link to="/"><FaCartPlus /></Link></li>
                  <li><Link to="/"><FaArrowsRotate /></Link></li>
                </ul>
              </div>
              <div className="fr__product__inner">
                <div className="fix text-center">
                  <span className="pro-rating">
                    <Link to="/" aria-label="star">
                      {generateStars(3, 2)}
                    </Link>
                  </span>
                </div>
                <h4><Link to="/">{product.name}</Link></h4>
                <ul className="fr__pro__prize">
                  <li className="old__prize"><del>${product.oldPrice}</del></li>
                  <li>${product.price}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid;