/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { city_bool_exp } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: City
// ====================================================

export interface City_city_city_translations {
  __typename: "city_translation";
  text: string;
  language: any;
}

export interface City_city {
  __typename: "city";
  name: string;
  id: any;
  postcode: number | null;
  /**
   * An array relationship
   */
  city_translations: City_city_city_translations[];
}

export interface City {
  /**
   * fetch data from the table: "city"
   */
  city: City_city[];
}

export interface CityVariables {
  where?: city_bool_exp | null;
}
