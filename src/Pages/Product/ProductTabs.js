import React from 'react';
import { FaGrip, FaList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProductTabs = () => {
  return (
    <>
      <ul className="nav d-block shop-tab" role="tablist">
        <li>
          <Link className="active" to="#grid-view" data-bs-toggle="tab" role="tab" aria-selected="true">
            <FaGrip />
          </Link>
        </li>
        <li>
          <Link to="#list-view" data-bs-toggle="tab" role="tab" aria-selected="false">
            <FaList />
          </Link>
        </li>
      </ul>
      <div className="showing text-end d-none d-md-block">
        <p className="mb-0">Showing 01-09 of 17 Results</p>
      </div>
    </>
  )
}

export default ProductTabs;