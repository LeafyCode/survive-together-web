import { gql } from "apollo-boost";

export const INSERT_NEED = gql`
  mutation InsertNeed($objects: [need_insert_input!]!) {
    insert_need(objects: $objects) {
      affected_rows
    }
  }
`;
