import React from "react";

export const Distributors = () => {
  return (
    <>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Distributors</h1>
            <h2 className="subtitle">All distributors</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns ">
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <div className="card">
                <div className="card-content">
                  <div className="columns is-mobile">
                    <div className="column">
                      <div>
                        <h5 className="title is-5">Keels super</h5>
                      </div>
                    </div>
                    <div className="column is-right">
                      <div className="is-pulled-right">
                        <span className="tag is-warning">
                          <h6 className="subtitle is-6 is-right">+50 Items</h6>
                        </span>
                      </div>
                    </div>
                  </div>
                  <h6 className="title is-6 has-text-primary">
                    +94 77 65456456
                  </h6>
                  <div>
                    <h6 className="subtitle is-6 has-text-grey-light">
                      Available on 30 cities
                    </h6>
                    <p>Galle, Kottawa, Kasbawa, Horana, Kandy, Jaffna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
