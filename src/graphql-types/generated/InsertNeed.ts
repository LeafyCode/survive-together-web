/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { need_insert_input } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: InsertNeed
// ====================================================

export interface InsertNeed_insert_need {
  __typename: "need_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface InsertNeed {
  /**
   * insert data into the table: "need"
   */
  insert_need: InsertNeed_insert_need | null;
}

export interface InsertNeedVariables {
  objects: need_insert_input[];
}
