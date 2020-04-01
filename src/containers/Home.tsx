import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { STRequesterCard } from "../components/shared/STRequesterCard";
import { STDistributorCard } from "../components/shared/STDistributorCard";
import {
  Distributor,
  DistributorVariables,
} from "../graphql-types/generated/Distributor";
import { DISTRIBUTOR } from "../graphql-types/distributor";
import { order_by } from "../graphql-types/generated/graphql-global-types";
import { Hero } from "../components/home/Hero";
import { AreaSelection } from "../components/home/AreaSelection";
import { City, CityVariables } from "../graphql-types/generated/City";
import { CITIES } from "../graphql-types/city";
import { DISTRICT } from "../graphql-types/district";
import { District } from "../graphql-types/generated/District";
import { STSelectOption } from "../types";
import {
  getCitiesForSelect,
  getDistrictsForSelect,
} from "../helpers/sharedHelpers";

export const Home = () => {
  const [selectedCity, setSelectedCity] = useState<STSelectOption>();

  // Graphql queries
  const {
    loading: distributorsDataLoading,
    error: distributorsDataError,
    data: distributorsData,
  } = useQuery<Distributor, DistributorVariables>(DISTRIBUTOR, {
    variables: {
      limit: 4,
      where: {
        active: {
          _eq: true,
        },
        distributor_cities: {
          cityId: {
            _eq: selectedCity?.value,
          },
        },
      },
      order_by: [
        {
          created_at: order_by.desc,
        },
      ],
    },
  });
  const [
    getCities,
    { loading: citiesDataLoading, error: citiesDataError, data: citiesData },
  ] = useLazyQuery<City, CityVariables>(CITIES);
  const {
    loading: districtsDataLoading,
    error: districtsDataError,
    data: districtsData,
  } = useQuery<District>(DISTRICT);

  const citiesForSelect: STSelectOption[] = getCitiesForSelect(
    citiesData?.city
  );
  const districtsForSelect: STSelectOption[] = getDistrictsForSelect(
    districtsData?.district
  );

  return (
    <div>
      <Hero />

      {citiesDataError || districtsDataError ? (
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="full-notification notification is-danger is-centered">
                Something went wrong. I think our servers are getting fried due
                to the heavy load. Or something else... We&apos;ll look into it!
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AreaSelection
          citiesForSelect={citiesForSelect}
          districtsForSelect={districtsForSelect}
          districtsDataLoading={districtsDataLoading}
          citiesDataLoading={citiesDataLoading}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          getCities={getCities}
        />
      )}

      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <div>
                <p className="title is-3 is-spaced">Most recent distributors</p>
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
            {distributorsDataError && (
              <div className="full-notification notification is-danger is-centered">
                Something went wrong. I think our servers are getting fried due
                to the heavy load. Or something else... We&apos;ll look into it!
              </div>
            )}
            {distributorsDataLoading && (
              <progress className="progress is-small is-primary" max="100" />
            )}
            {distributorsData && distributorsData.distributor.length === 0 && (
              <div className="full-notification notification  is-centered">
                No distributors found. Please be patient.
              </div>
            )}
            {!distributorsDataLoading &&
              distributorsData &&
              distributorsData.distributor.map((distributor) => (
                <STDistributorCard
                  distributorData={distributor}
                  key={distributor.id}
                />
              ))}
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
