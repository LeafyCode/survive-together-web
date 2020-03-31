import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1>Survive Together</h1>
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="button is-primary" to="/login">
                <strong>Sign up</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-7 is-full-mobile">
              <div className="column is-9">
                <h1 className="title is-1 is-spaced">
                  Help the people When They Need
                </h1>

                <h2 className="subtitle is-spaced">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempo
                </h2>
                <button type="button" className="button is-warning is-medium">
                  Enroll as a distributor
                </button>
              </div>
            </div>

            <div className="column is-4 is-full-mobile">
              <div className="card">
                <div className="card-content">
                  <p className="title is-4 ">Special note</p>
                  <div className="content">
                    Lort amet, consectetur adipisdolor sit amet, consectetur
                    adipiscing elit. lorem ipsum docing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="card">
              <div className="card-content">
                <div className="columns is-centered">
                  <div className="column is-narrow has-text-centered is-centered">
                    <div className="field">
                      <div className="control">
                        <div className="select is-primary is-centered">
                          <select>
                            <option>Select your district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-narrow has-text-centered is-centered">
                    <div className="field">
                      <div className="control">
                        <div className="select is-primary is-centered">
                          <select>
                            <option>Select your district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                            <option>district</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="title is-3 is-spaced">Popular Distributors</p>
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

      <section className="section">
        <div className="container">
          <p className="title is-3 is-spaced">Cities with most requests</p>
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

      <section className="section">
        <div className="container">
          <p className="title is-3 is-spaced has-text-centered">Sponsors</p>
          <div className="columns ">
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <figure className="image is-2by1">
                <img
                  alt="sponsor-logo"
                  src="https://bulma.io/images/placeholders/256x256.png"
                />
              </figure>
            </div>
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <figure className="image is-2by1">
                <img
                  alt="sponsor-logo"
                  src="https://bulma.io/images/placeholders/256x256.png"
                />
              </figure>
            </div>
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <figure className="image is-2by1">
                <img
                  alt="sponsor-logo"
                  src="https://bulma.io/images/placeholders/256x256.png"
                />
              </figure>
            </div>
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <figure className="image is-2by1">
                <img
                  alt="sponsor-logo"
                  src="https://bulma.io/images/placeholders/256x256.png"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
