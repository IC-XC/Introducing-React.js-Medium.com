import React from "react";

const Pricing = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">LA TRAPPE TRAPPIST ISID'OR</h4>
                <h1 className="card-text">$200.00</h1>
                <p>La Trappe Isid’or gives you a perfect blend of floral, fruity, and herbal aroma.</p>
                <p>It is an excellent balance of simplicity and complexity.</p>
                <p>It has a fruity and malty caramel flavor.</p>
                <p>La Trappe Isid’or pours an amber color with a white foam head.</p>
                <p>Flavour: Slightly bitterness with notes of caramel.</p>
                <p>Taste: Caramel, citrus fruits, banana, some floral hops, candy sugar, oak and a slight bitter aftertaste.</p>
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                Get Started
</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Pro Version</h4>
                <h1 className="card-text">$400.00</h1>
                <p>Feature 1</p>
                <p>Feature 2</p>
                <p>Feature 3</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Plus Version</h4>
                <h1 className="card-text">$300.00</h1>
                <p>Feature 1</p>
                <p>Feature 2</p>
                <p>Feature 3</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
