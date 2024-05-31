import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const RootLayout = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <main>
        {/* Renders the child route's element, if there is one. */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;