import { gql } from "apollo-boost";

export const INSERT_DISTRIBUTOR = gql`
  mutation InsertDistributor($objects: [distributor_insert_input!]!) {
    insert_distributor(objects: $objects) {
      affected_rows
    }
  }
`;
