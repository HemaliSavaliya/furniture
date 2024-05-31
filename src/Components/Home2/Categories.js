import React from 'react';
import { productCategories } from '../../Common/Data/FurnitureData';

const Categories = () => {
  return (
    <div className="bg-light-brown pt-90 pb-90">
      <div className="container">
        <div className="row align-items-center">
          {productCategories.map((category) => (
            <div key={category.id} className={`category-item mb-20 ${category.colSize}`}>
              <img
                src={category.image}
                alt="categories"
                className="img-fluid"
                loading="lazy"
              />
              <div className="category-badge">{category.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;