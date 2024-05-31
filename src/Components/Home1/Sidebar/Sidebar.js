import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/img/banner/logo.png";
import { navigationLinks } from '../../../Common/Data/FurnitureData';

const Sidebar = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  return (
    <>
      <div className="tpoffcanvas__logo">
        <Link to="/"  class="home2-logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="tp-main-menu-mobile d-xl-none">
        <nav className="tp-main-menu-content">
          <ul>
            {navigationLinks.map((item, index) => (
              <li key={index} className={item.submenu ? 'has-dropdown dropdown-opened' : ''}>
                <Link
                  to={item.to}
                  className={`expanded ${isSubMenuVisible ? 'dropdown-opened' : ''}`}
                >
                  {item.label}
                  {item.submenu && (
                    <button
                      className={`dropdown-toggle-btn ${isSubMenuVisible ? 'dropdown-opened' : ''}`}
                      onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}
                    >
                      <i><FaAngleRight /></i>
                    </button>
                  )}
                </Link>
                {item.submenu && (
                  <div className="tp-submenu submenu has-homemenu" style={{ display: isSubMenuVisible ? 'block' : 'none' }}>
                    <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-2">
                      {item.submenu.map((submenuItem, subIndex) => (
                        <div key={subIndex} className="col homemenu">
                          <div className="homemenu-thumb mb-15">
                            <Link to={submenuItem.to}>
                              <img
                                src={submenuItem.imgSrc}
                                alt="home banner"
                                className="img-fluid"
                                width="250"
                                height="279"
                                loading="lazy"
                              />
                            </Link>
                            <div className="homemenu-btn">
                              <Link className="tp-menu-btn" to={submenuItem.to}>View Demo</Link>
                            </div>
                          </div>
                          <div className="homemenu-content text-center">
                            <h4 className="homemenu-title">
                              <Link to={submenuItem.to}>{submenuItem.label}</Link>
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;