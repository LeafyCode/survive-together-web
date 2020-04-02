/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { distributor_bool_exp, distributor_order_by } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: Distributor
// ====================================================

export interface Distributor_distributor_distributor_cities_city {
  __typename: "city";
  name: string;
  id: any;
}

export interface Distributor_distributor_distributor_cities {
  __typename: "distributor_city";
  /**
   * An object relationship
   */
  city: Distributor_distributor_distributor_cities_city;
}

export interface Distributor_distributor_distributor_items_item_category {
  __typename: "item_category";
  name: string;
  id: any;
}

export interface Distributor_distributor_distributor_items {
  __typename: "distributor_item";
  id: any;
  name: string;
  price: number | null;
  deliveryFee: number | null;
  /**
   * An object relationship
   */
  item_category: Distributor_distributor_distributor_items_item_category;
}

export interface Distributor_distributor_distributor_packs {
  __typename: "distributor_pack";
  name: string;
  id: any;
  price: number;
  deliveryFee: number | null;
  content: string;
}

export interface Distributor_distributor {
  __typename: "distributor";
  /**
   * An array relationship
   */
  distributor_cities: Distributor_distributor_distributor_cities[];
  /**
   * An array relationship
   */
  distributor_items: Distributor_distributor_distributor_items[];
  /**
   * An array relationship
   */
  distributor_packs: Distributor_distributor_distributor_packs[];
  bannerImageUrl: string | null;
  name: string;
  phoneNumber: string;
  email: string | null;
  id: any;
  website: string | null;
}

export interface Distributor {
  /**
   * fetch data from the table: "distributor"
   */
  distributor: Distributor_distributor[];
}

export interface DistributorVariables {
  where?: distributor_bool_exp | null;
  limit?: number | null;
  offset?: number | null;
  order_by?: distributor_order_by[] | null;
}
