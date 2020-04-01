/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { city_order_by, city_bool_exp } from "./graphql-global-types";

// ====================================================
// GraphQL subscription operation: CityByNeeds
// ====================================================

export interface CityByNeeds_city_needs_aggregate_aggregate {
  __typename: "need_aggregate_fields";
  count: number | null;
}

export interface CityByNeeds_city_needs_aggregate {
  __typename: "need_aggregate";
  aggregate: CityByNeeds_city_needs_aggregate_aggregate | null;
}

export interface CityByNeeds_city_district {
  __typename: "district";
  name: string;
}

export interface CityByNeeds_city_city_translations {
  __typename: "city_translation";
  language: any;
  text: string;
}

export interface CityByNeeds_city_distributor_cities_aggregate_aggregate {
  __typename: "distributor_city_aggregate_fields";
  count: number | null;
}

export interface CityByNeeds_city_distributor_cities_aggregate {
  __typename: "distributor_city_aggregate";
  aggregate: CityByNeeds_city_distributor_cities_aggregate_aggregate | null;
}

export interface CityByNeeds_city {
  __typename: "city";
  /**
   * An aggregated array relationship
   */
  needs_aggregate: CityByNeeds_city_needs_aggregate;
  name: string;
  id: any;
  /**
   * An object relationship
   */
  district: CityByNeeds_city_district;
  /**
   * An array relationship
   */
  city_translations: CityByNeeds_city_city_translations[];
  /**
   * An aggregated array relationship
   */
  distributor_cities_aggregate: CityByNeeds_city_distributor_cities_aggregate;
}

export interface CityByNeeds {
  /**
   * fetch data from the table: "city"
   */
  city: CityByNeeds_city[];
}

export interface CityByNeedsVariables {
  order_by?: city_order_by[] | null;
  limit?: number | null;
  where?: city_bool_exp | null;
}
