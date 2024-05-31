import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useLoader = () => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const switchInterval = setInterval(() => {
      setIsAnimationRunning(prevState => !prevState);
    }, 1000); // Toggle animations every 3 seconds

    setTimeout(() => {
      setShowPreloader(false);
      setIsAnimationRunning(false); // Stop the animation
      clearInterval(switchInterval); // Clear the interval
    }, 5000);

    return () => {
      clearInterval(switchInterval);
    };
  }, [location.pathname]);

  // Check if the current location has changed and show the preloader if it has
  useEffect(() => {
    setShowPreloader(true);
  }, [location.pathname]);

  return { isAnimationRunning, showPreloader };
}

export default useLoader;