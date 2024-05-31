import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banner from "../../Assets/img/banner/5.jpg";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { categories, colorOptions } from '../../Common/Data/FurnitureData';

const ProductAside = () => {
  const [priceRange, setPriceRange] = useState({ min: 2500, max: 7500 });

  const handlePriceChange = (e, type) => {
    const newValue = parseInt(e.target.value);
    if (type === 'min' && newValue < priceRange.max - 1000) {
      setPriceRange({ ...priceRange, min: newValue });
    } else if (type === 'max' && newValue > priceRange.min + 1000) {
      setPriceRange({ ...priceRange, max: newValue });
    }
  };

  const calculateRangeStyles = {
    left: `${(priceRange.min / 10000) * 100}%`,
    right: `${100 - (priceRange.max / 10000) * 100}%`
  };

  return (
    <>
      <aside className="widget widget-search mb-30">
        <form action="#">
          <input type="text" placeholder="Search here..." />
          <button type="submit" aria-label="submit">
            <FaMagnifyingGlass />
          </button>
        </form>
      </aside>
      <aside className="widget widget-color mb-30">
        <div className="widget-title">
          <h4>Categories</h4>
        </div>
        <div id="cat-treeview" className="widget-info product-cat boxscrol2">
          <ul className="treeview">
            {categories.map((category, index) => (
              <li key={index}><span>{category}</span></li>
            ))}
          </ul>
        </div>
      </aside>
      <aside className="widget shop-filter mb-30">
        <div className="widget-title">
          <h4>Price</h4>
        </div>
        <div className="widget-info">
          <div className="price_filter">
            <div className="price-input">
              <div className="field">
                <span>Min</span>
                <input type="number" className="input-min" value={priceRange.min} onChange={(e) => handlePriceChange(e, 'min')} />
              </div>
              <div className="field ml-10">
                <span>Max</span>
                <input type="number" className="input-max" value={priceRange.max} onChange={(e) => handlePriceChange(e, 'max')} />
              </div>
            </div>
            <div className="slider">
              <div className="progress" style={calculateRangeStyles}></div>
            </div>
            <div className="range-input">
              <input type="range" className="range-min" min="0" max="10000" value={priceRange.min} step="100" onChange={(e) => handlePriceChange(e, 'min')} />
              <input type="range" className="range-max" min="0" max="10000" value={priceRange.max} step="100" onChange={(e) => handlePriceChange(e, 'max')} />
            </div>
          </div>
        </div>
      </aside>
      <aside className="widget widget-color mb-30">
        <div className="widget-title">
          <h4>Color</h4>
        </div>
        <div className="widget-info color-filter clearfix">
          <ul>
            {colorOptions.map((option, index) => (
              <li key={index}>
                <Link to="/">
                  <span className={`color color-${index + 1}`}></span>
                  {option.color}
                  <span className="count">{option.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <aside className="widget widget-banner hidden-sm">
        <div className="widget-info widget-banner-img">
          <Link to="/">
            <img
              src={banner}
              alt="Banner"
              className="img-fluid"
              width="231"
              height="282"
              loading="lazy"
            />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default ProductAside;