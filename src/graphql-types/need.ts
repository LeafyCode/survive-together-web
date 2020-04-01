import { gql } from "apollo-boost";

export const INSERT_NEED = gql`
  mutation InsertNeed($objects: [need_insert_input!]!) {
    insert_need(objects: $objects) {
      affected_rows
    }
  }
`;

export const LATEST_NEEDS = gql`
  subscription LatestNeeds(
    $order_by: [need_order_by!]
    $limit: Int
    $where: need_bool_exp
  ) {
    need(order_by: $order_by, limit: $limit, where: $where) {
      id
      city {
        name
        id
      }
      contactNumber
      contactPersonName
      numberOfPeople
      item_category_needs {
        item_category {
          id
          name
        }
      }
    }
  }
`;
