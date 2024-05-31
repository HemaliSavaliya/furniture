import React from 'react';
import { Link } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import Sidebar from '../Sidebar/Sidebar';
import menuBar from "../../../Assets/img/banner/menubar.svg";
import menu from "../../../Assets/img/banner/catMenu.svg";
import logo from "../../../Assets/img/banner/logo.png";
import { navigationLinks, yourCategoryArray } from '../../../Common/Data/FurnitureData';
import useScrollNavbar from '../../../Hooks/useScrollNavbar';

const Header = () => {
  const { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useScrollNavbar();

  return (
    <>
      {/* <!-- tp-offcanvas-area-start (for sidebar) --> */}
      {isSidebarOpen && (
        <div className="tpoffcanvas-area">
          <div className={`tpoffcanvas ${isSidebarOpen ? 'opened' : ''}`}>
            <div className="tpoffcanvas__close-btn">
              <button className="close-btn" aria-label="close" onClick={handleSidebarClose}>
                <i><FaXmark /></i>
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
      {isSidebarOpen && <div className="body-overlay apply" onClick={handleSidebarClose}></div>}
      {/* <!-- tp-offcanvas-area-end --> */}

      <header className="tp-header-wrap">
        <div id="header-sticky" className={isHeaderSticky ? 'header-sticky  tp-header-5-space' : 'tp-header__area tp-header-5-space'}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 text-center d-none d-xl-block">
                <Link to="/Home2" aria-label="Furniture" class="home2-logo">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="col-xl-7 col-lg-7 d-none d-xl-block text-end">
                <div className="tp-header-4__main-menu menu-space">
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
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-6 col-6 d-flex justify-content-start align-items-start">
                <div
                  className="tp-header-category tp-category-menu tp-header-category-toggle d-none d-xl-block"
                >
                  <button
                    className="tp-category-menu-btn tp-category-menu-toggle"
                    aria-label="categories"
                  >
                    <span>
                      <img src={menu} alt="categories-menu" loading="lazy" />
                    </span>
                    All Categories
                  </button>
                  <nav className="tp-category-menu-content">
                    <ul>
                      {yourCategoryArray.map((category, categoryIndex) => (
                        <li key={categoryIndex}>
                          <Link to="/Home2">{category}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="tp-header-4__logo d-xl-none">
                  <Link to="/Home2">
                    Furniture
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-7 col-md-6 col-6">
                <div
                  className="tp-header-5-right-box d-flex align-items-center justify-content-end"
                >
                  <div className="tp-header-middle-5__bar d-xl-none">
                    <button className="tp-menu-bar" aria-label="menu" onClick={handleSidebarOpen}>
                      <img src={menuBar} alt="menu-bar" loading="lazy" />
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