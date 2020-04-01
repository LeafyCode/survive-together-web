import { gql } from "apollo-boost";

export const INSERT_DISTRIBUTOR = gql`
  mutation InsertDistributor($objects: [distributor_insert_input!]!) {
    insert_distributor(objects: $objects) {
      affected_rows
    }
  }
`;

export const DISTRIBUTOR = gql`
  query Distributor(
    $where: distributor_bool_exp
    $limit: Int
    $offset: Int
    $order_by: [distributor_order_by!]
  ) {
    distributor(
      where: $where
      limit: $limit
      offset: $offset
      order_by: $order_by
    ) {
      distributor_cities {
        city {
          name
          id
        }
      }
      distributor_items {
        id
        name
        price
        item_category {
          name
          id
        }
      }
      distributor_packs {
        name
        id
        price
        deliveryFee
        content
      }
      name
      phoneNumber
      email
      id
      website
    }
  }
`;
