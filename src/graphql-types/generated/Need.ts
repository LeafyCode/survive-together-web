/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { need_order_by, need_bool_exp } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: Need
// ====================================================

export interface Need_need_city {
  __typename: "city";
  name: string;
  id: any;
}

export interface Need_need_item_category_needs_item_category {
  __typename: "item_category";
  id: any;
  name: string;
}

export interface Need_need_item_category_needs {
  __typename: "item_category_need";
  /**
   * An object relationship
   */
  item_category: Need_need_item_category_needs_item_category;
}

export interface Need_need {
  __typename: "need";
  id: any;
  /**
   * An object relationship
   */
  city: Need_need_city;
  contactNumber: string;
  contactPersonName: string;
  numberOfPeople: number;
  created_at: any;
  /**
   * An array relationship
   */
  item_category_needs: Need_need_item_category_needs[];
}

export interface Need {
  /**
   * fetch data from the table: "need"
   */
  need: Need_need[];
}

export interface NeedVariables {
  order_by?: need_order_by[] | null;
  limit?: number | null;
  where?: need_bool_exp | null;
}
