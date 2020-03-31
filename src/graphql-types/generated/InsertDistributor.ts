/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { distributor_insert_input } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: InsertDistributor
// ====================================================

export interface InsertDistributor_insert_distributor {
  __typename: "distributor_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface InsertDistributor {
  /**
   * insert data into the table: "distributor"
   */
  insert_distributor: InsertDistributor_insert_distributor | null;
}

export interface InsertDistributorVariables {
  objects: distributor_insert_input[];
}
