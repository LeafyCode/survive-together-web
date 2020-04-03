import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useTranslation } from "react-i18next";
import { STPageHeaderWithFilters } from "../components/shared/STPageHeaderWithFilters";
import {
  Distributor,
  DistributorVariables,
} from "../graphql-types/generated/Distributor";
import { DISTRIBUTOR } from "../graphql-types/distributor";
import { order_by } from "../graphql-types/generated/graphql-global-types";
import { useStoreState } from "../store";
import { STDistributorCard } from "../components/shared/STDistributorCard";

export const Distributors = () => {
  const { t } = useTranslation();

  const city = useStoreState((state) => state.area.city);

  const {
    loading: distributorsDataLoading,
    error: distributorsDataError,
    data: distributorsData,
  } = useQuery<Distributor, DistributorVariables>(DISTRIBUTOR, {
    variables: {
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

  return (
    <div>
      <STPageHeaderWithFilters
        title={t("requestDistributor")}
        subTitle={t("requestDistributorSubtitle")}
      />

      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
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
    </div>
  );
};
