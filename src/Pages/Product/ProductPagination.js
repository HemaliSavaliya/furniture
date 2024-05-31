import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProductPagination = () => {
  return (
    <div className="shop-pagination text-center">
      <div className="pagination">
        <ul>
          <li>
            <Link to="/" aria-label="arrow left">
              <FaArrowLeftLong />
            </Link>
          </li>
          <li><Link to="/">01</Link></li>
          <li><Link className="active" to="/">02</Link></li>
          <li><Link to="/">03</Link></li>
          <li><Link to="/">04</Link></li>
          <li><Link to="/">05</Link></li>
          <li>
            <Link to="/" aria-label="arrow right">
              <FaArrowRightLong />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductPagination;