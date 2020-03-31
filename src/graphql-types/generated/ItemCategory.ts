/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ItemCategory
// ====================================================

export interface ItemCategory_item_category {
  __typename: "item_category";
  id: any;
  name: string;
}

export interface ItemCategory {
  /**
   * fetch data from the table: "item_category"
   */
  item_category: ItemCategory_item_category[];
}
