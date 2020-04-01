import React from "react";
import { Link } from "react-router-dom";
import { STRequesterCard } from "../components/shared/STRequesterCard";
import { STDistributorCard } from "../components/shared/STDistributorCard";

const distributorData = {
  id: "fdc20b63-6bcf-42f0-a866-46c9d0518caa",
  name: "gfdg",
  phoneNumber: "dfg",
  email: "dfg@leafycode.com",
  website: "dfg",
  active: false,
  distributor_items: [
    {
      id: "01",
      name: "Item 01",
      price: "200",
      deliveryFee: "20",
    },
    {
      id: "02",
      name: "Item 02",
      price: "300",
      deliveryFee: "30",
    },
  ],
  distributor_packs: [
    {
      id: "01",
      name: "Package 01",
      price: "200",
      deliveryFee: "20",
      content: ["Item 01", "Item 02", "Item 03", "Item 04"],
    },
  ],
  distributor_cities: [
    {
      city: {
        id: "cd649328-18cb-4830-a6cf-4f24b357ecac",
        name: "Colombo 15 (Modara)",
        location: {
          type: "Point",
          crs: {
            type: "name",
            properties: {
              name: "urn:ogc:def:crs:EPSG::4326",
            },
          },
          coordinates: [6.959444, 79.875278],
        },
        districtId: "e9132a5f-0d47-4d38-b692-a2787bccd821",
      },
    },
    {
      city: {
        id: "cd649328-18cb-4830-a6cf-4fa24b357ecac",
        name: "Kottawa",
        location: {
          type: "Point",
          crs: {
            type: "name",
            properties: {
              name: "urn:ogc:def:crs:EPSG::4326",
            },
          },
          coordinates: [6.959444, 79.875278],
        },
        districtId: "e9132a5f-0d47-4d38-b692-a2787bccd821",
      },
    },
  ],
};
export const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
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
          <div className="columns is-mobile">
            <div className="column">
              <div>
                <p className="title is-3 is-spaced">Popular Distributors</p>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <Link to="/distributors" className="navbar-item">
                  <button type="button" className="button">
                    Show more...
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="columns ">
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <STDistributorCard distributorData={distributorData} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <div>
                <p className="title is-3 is-spaced">
                  Cities with most requests
                </p>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <Link to="/districts" className="navbar-item">
                  <button type="button" className="button">
                    Show more...
                  </button>
                </Link>
              </div>
            </div>
          </div>

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
          <div className="columns is-mobile">
            <div className="column">
              <div>
                <p className="title is-3 is-spaced">Latest requests</p>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <Link to="/districts" className="navbar-item">
                  <button type="button" className="button">
                    Show more...
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="columns ">
            <div className="column is-full-mobile is-half-tablet is-one-quarter-desktop">
              <STRequesterCard
                requesterData={{
                  requesterName: "John Doe",
                  city: "Kottawa north",
                  contactNo: "+94 77 000 0000",
                  peopleCount: 100,
                }}
              />
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
