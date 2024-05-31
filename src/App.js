import { Suspense } from 'react';
import "./Assets/css/style.css";
import "./Assets/css/animation.css";
import "./Assets/css/spacing.css";
import tableSvg from './Assets/img/categories/table.svg';
import chairSvg from './Assets/img/categories/chair.svg';
import { ApiRoutes } from './Routes';
import useLoader from './Hooks/useLoader';

function App() {
  const { isAnimationRunning, showPreloader } = useLoader();

  return (
    <>
      {/* <!-- Preloader start --> */}
      {showPreloader && (
        <div id="preloader">
          <img
            id="table"
            className={`icon ${isAnimationRunning ? '' : 'hidden'}`}
            src={tableSvg}
            alt="table svg"
            loading="lazy"
          />
          <img
            id="chair"
            className={`icon ${isAnimationRunning ? 'hidden' : ''}`}
            src={chairSvg}
            alt="chair svg"
            loading="lazy"
          />
        </div>
      )}
      {/* <!-- Preloader end --> */}

      <Suspense>
        <ApiRoutes />
      </Suspense>
    </>
  );
}

export default App;