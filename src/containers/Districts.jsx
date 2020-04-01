import React from "react";
import { MostRequestedDistricts } from "../components/MostRequestedDistricts";

export const Districts = () => {
  return (
    <>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">District</h1>
            <h2 className="subtitle">All districts</h2>
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
                        <h5 className="title is-5">District name</h5>
                      </div>
                    </div>
                    <div className="column is-right">
                      <div className="is-pulled-right">
                        <span className="tag is-primary">
                          <h6 className="subtitle is-6 is-right">
                            2000 requests
                          </h6>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="subtitle is-6 has-text-grey-light">
                      Cities
                    </h6>
                    <p>Galle, Kottawa, Kasbawa, Horana, Kandy, Jaffna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MostRequestedDistricts />
    </>
  );
};
