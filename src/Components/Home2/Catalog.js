import React from 'react';

const Catalog = () => {
  return (
    <section className="bg-brown">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-md-6 catalog-left"></div>
          <div className="col-xl-6 col-md-6 catalog-right align-self-center">
            <div className="section-title">
              <h2>modern living quarters</h2>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              eaque doloribus, repellat dolor nisi nihil facilis voluptatibus
              porro deleniti recusandae?
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, sequi distinctio corporis pariatur excepturi minima!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog;