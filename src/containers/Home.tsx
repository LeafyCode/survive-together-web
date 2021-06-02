import React from "react";
import { Link } from "react-router-dom";
import { useLazyQuery, useQuery, useSubscription } from "@apollo/react-hooks";
import { useTranslation } from "react-i18next";
import { STRequestCard } from "../components/shared/STRequestCard";
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
import { CITIES, CITY_BY_NEEDS } from "../graphql-types/city";
import { DISTRICT } from "../graphql-types/district";
import { District } from "../graphql-types/generated/District";
import { STSelectOption } from "../types";
import {
  getCitiesForSelect,
  getDistrictsForSelect,
} from "../helpers/sharedHelpers";
import {
  CityByNeeds,
  CityByNeedsVariables,
} from "../graphql-types/generated/CityByNeeds";
import { STCitySummaryCard } from "../components/shared/STCitySummaryCard";
import {
  LatestNeeds,
  LatestNeedsVariables,
} from "../graphql-types/generated/LatestNeeds";
import { LATEST_NEEDS } from "../graphql-types/need";
import { useStoreState } from "../store";

export const Home = () => {
  const { t } = useTranslation();

  const city = useStoreState((state) => state.area.city);
  const district = useStoreState((state) => state.area.district);

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
            _eq: city?.value,
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
  const {
    loading: districtsDataLoading,
    error: districtsDataError,
    data: districtsData,
  } = useQuery<District>(DISTRICT);
  const [
    getCities,
    { loading: citiesDataLoading, error: citiesDataError, data: citiesData },
  ] = useLazyQuery<City, CityVariables>(CITIES);
  const {
    loading: cityByNeedsDataLoading,
    error: cityByNeedsDataError,
    data: cityByNeedsData,
  } = useSubscription<CityByNeeds, CityByNeedsVariables>(CITY_BY_NEEDS, {
    variables: {
      where: district?.value
        ? {
            districtId: {
              _eq: district?.value || null,
            },
          }
        : {},
      order_by: [
        {
          needs_aggregate: {
            count: order_by.desc,
          },
        },
      ],
      limit: 8,
    },
  });

  const {
    loading: latestNeedsDataLoading,
    error: latestNeedsDataError,
    data: latestNeedsData,
  } = useSubscription<LatestNeeds, LatestNeedsVariables>(LATEST_NEEDS, {
    variables: {
      where: city?.value
        ? {
            cityId: {
              _eq: city?.value,
            },
          }
        : {},
      order_by: [
        {
          created_at: order_by.desc,
        },
      ],
      limit: 50,
    },
  });

  const districtsForSelect: STSelectOption[] = getDistrictsForSelect(
    districtsData?.district
  );
  const citiesForSelect: STSelectOption[] = getCitiesForSelect(
    citiesData?.city
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
          getCities={getCities}
        />
      )}

      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <div>
                <p className="title is-3 is-spaced">
                  {t("mostRecentDistributors")}
                </p>
              </div>
            </div>
            <div className="column is-right">
              <div className="is-pulled-right">
                <Link to="/distributors" className="navbar-item">
                  <button type="button" className="button">
                    {t("showMore")}
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
          <div className="columns is-mobile is-multiline">
            <div className="column">
              <div>
                <div className="title is-3 is-spaced">
                  {t("citiesWithMostRequest")}
                  <span className="tag is-danger">LIVE</span>{" "}
                  <div className="blob" />
                </div>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            {cityByNeedsDataError && (
              <div className="full-notification notification is-danger is-centered">
                Something went wrong. I think our servers are getting fried due
                to the heavy load. Or something else... We&apos;ll look into it!
              </div>
            )}
            {cityByNeedsDataLoading && (
              <progress className="progress is-small is-primary" max="100" />
            )}
            {cityByNeedsData && cityByNeedsData.city.length === 0 && (
              <div className="full-notification notification  is-centered">
                No cities found. Please be patient.
              </div>
            )}
            {!cityByNeedsDataLoading &&
              cityByNeedsData &&
              cityByNeedsData.city.map((needCity) => (
                <STCitySummaryCard key={needCity.id} city={needCity} />
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <div>
                <div className="title is-3 is-spaced">
                  {t("latestRequests")}{" "}
                  <span className="tag is-danger">LIVE</span>{" "}
                  <div className="blob" />
                </div>
              </div>
            </div>
            <div className="column" style={{ flexGrow: "inherit" }}>
              <Link to="/requests" className="button">
                {t("showMore")}
              </Link>
            </div>
          </div>

          <div className="columns is-multiline">
            {latestNeedsDataError && (
              <div className="full-notification notification is-danger is-centered">
                Something went wrong. I think our servers are getting fried due
                to the heavy load. Or something else... We&apos;ll look into it!
              </div>
            )}
            {latestNeedsDataLoading && (
              <progress className="progress is-small is-primary" max="100" />
            )}
            {latestNeedsData && latestNeedsData.need.length === 0 && (
              <div className="full-notification notification  is-centered">
                No requests found. Please be patient.
              </div>
            )}
            {!latestNeedsDataLoading &&
              latestNeedsData &&
              latestNeedsData.need.map((need) => (
                <STRequestCard needData={need} key={need.id} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
