import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useScrollNavbar2 = () => {
  const [, setScroll] = useState(window.scrollY);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newScroll = window.scrollY;
      setScroll(newScroll);

      const headerSticky = document.getElementById('header-sticky');

      if (newScroll < 100) {
        // Remove the "header-sticky" class
        setIsHeaderSticky(false);
        // Remove
        headerSticky.style.display = 'block';
        headerSticky.style.margin = '0';
      } else {
        // Add the "header-sticky" class
        setIsHeaderSticky(true);
        // Add
        headerSticky.style.display = "block";
        if (
          location.pathname === "/Product" ||
          location.pathname === "/About" ||
          location.pathname === "/Contact"
        ) {
          headerSticky.style.margin = "0";
        } else {
          headerSticky.style.margin = '1%';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return { isHeaderSticky, isSidebarOpen, handleSidebarOpen, handleSidebarClose };
}

export default useScrollNavbar2;