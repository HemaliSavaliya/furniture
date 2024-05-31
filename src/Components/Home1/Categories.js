import React from 'react';
import { Link } from 'react-router-dom';
import { categoryData } from '../../Common/Data/FurnitureData';

const Categories = () => {
  return (
    <div className="tp-catagori__area p-relative pb-115">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-xl-12">
            <div className="fa-title">All Categories</div>
          </div>
        </div>

        <div className="tp-product-5__area pt-55">
          <div className="container custom-container-4">
            <div
              className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-1 row-cols-sm-2"
            >
              {categoryData.map((category, index) => (
                <div className="col" key={index}>
                  <div className="tp-product-5__item text-center">
                    <div className="tp-product-5__thumb">
                      <img
                        src={category.image}
                        alt={category.alt}
                        className="img-fluid"
                        width="100"
                        height="100"
                        loading="lazy"
                      />
                    </div>
                    <div className="tp-product-5__content">
                      <Link to="/">
                        <h4 className="tp-product-5__title">{category.title}</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;