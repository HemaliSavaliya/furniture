import React from 'react';
import { featureData } from '../../Common/Data/FurnitureData';

const Process = () => {
  return (
    <div className="pb-90 bg-light">
      <div className="container">
        <div className="row align-items-center process-section">
          {featureData.map((feature, index) => (
            <div key={index} className="col-xl-4 col-lg-4 text-center process__space">
              <img
                src={feature.image}
                alt={feature.alt}
                className="img-fluid"
                width="180"
                height="180"
                loading="lazy"
              />
              <div className="title">{feature.title}</div>
              {/* dangerouslySetInnerHTML used for <br> tags coz it's adding in subtitle content */}
              <div className="subtitle" dangerouslySetInnerHTML={{ __html: feature.subtitle }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;