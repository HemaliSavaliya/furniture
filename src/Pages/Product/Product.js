import React from 'react';
import Header from '../../Components/Home1/Header/Header';
import Footer from '../../Components/Home1/Footer/Footer';
import Banner from '../../Common/Banner';
import ProductAside from './ProductAside';
import ProductTabs from './ProductTabs';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import ProductPagination from './ProductPagination';

const Product = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />

      <div className="heading-banner-area overlay-bg">
        <Banner
          home="Home"
          title="products"
        />
      </div>

      <div className="product-area pt-80 pb-80 product-style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-1 order-lg-1">
              <ProductAside />
            </div>

            <div className="col-lg-9 order-2 order-lg-1 tab-space">
              <div className="shop-content mt-tab-30 mb-30 mb-lg-0">
                <div className="product-option mb-30 clearfix">
                  <ProductTabs />
                </div>

                <div className="tab-content">
                  <ProductGrid />
                  <ProductList />
                </div>

                <ProductPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product;