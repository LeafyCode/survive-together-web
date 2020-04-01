/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { district_bool_exp } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: District
// ====================================================

export interface District_district {
  __typename: "district";
  name: string;
  id: any;
}

export interface District {
  /**
   * fetch data from the table: "district"
   */
  district: District_district[];
}

export interface DistrictVariables {
  where?: district_bool_exp | null;
}
