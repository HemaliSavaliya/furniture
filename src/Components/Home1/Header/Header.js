import React from 'react';
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from "../../../Assets/img/banner/logo.png";
import { navigationLinks } from '../../../Common/Data/FurnitureData';
import useScrollNavbar2 from '../../../Hooks/useScrollNavbar2';

const Header = () => {
  const { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useScrollNavbar2();

  return (
    <>
      {/* <!-- tp-offcanvas-area-start (for sidebar) --> */}
      {isSidebarOpen && (
        <div className={`tpoffcanvas ${isSidebarOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" aria-label="close" onClick={handleSidebarClose}>
              <i><FaXmark /></i>
            </button>
          </div>
          <Sidebar />
        </div>
      )}
      {isSidebarOpen && <div className="body-overlay apply" onClick={handleSidebarClose}></div>}
      {/* <!-- tp-offcanvas-area-end --> */}

      <header id="tp-header-height">
        <div id="header-sticky" className={isHeaderSticky ? 'header-sticky' : 'tp-header__area'}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 col-6">
                <div className="tp-header__left-box d-flex align-items-center">
                  <div className="tp-header__logo">
                    <Link to="/" aria-label="Furniture">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 d-none d-xl-block text-end" style={{ paddingRight: "0" }}>
                <div className="tp-header__main-menu">
                  <nav className="tp-main-menu-content">
                    <ul>
                      {navigationLinks.map((item, index) => (
                        <li key={index} className={item.submenu ? 'has-dropdown' : ''}>
                          <Link to={item.to}>{item.label}</Link>
                          {item.submenu && (
                            <div className="tp-submenu submenu has-homemenu">
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
                      <li className="cart">
                        <Link to="/Product" aria-label="cart">
                          <FaCartShopping />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-4 col-lg-7 col-md-6 col-sm-6 col-6 d-xl-none">
                <div
                  className="tp-header__right-box d-flex align-items-center justify-content-end"
                >
                  <div className="tp-header-2__bar d-xl-none">
                    <button className="tp-menu-bar" aria-label="menu" onClick={handleSidebarOpen}>
                      <i><FaBars /></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;