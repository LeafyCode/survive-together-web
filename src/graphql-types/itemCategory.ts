import { gql } from "apollo-boost";

export const ITEM_CATEGORIES = gql`
  query ItemCategory {
    item_category {
      id
      name
    }
  }
`;
