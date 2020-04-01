import { gql } from "apollo-boost";

export const CITIES = gql`
  query City($where: city_bool_exp) {
    city(where: $where) {
      name
      id
      postcode
      city_translations {
        text
        language
      }
    }
  }
`;

export const CITY_BY_NEEDS = gql`
  subscription CityByNeeds(
    $order_by: [city_order_by!]
    $limit: Int
    $where: city_bool_exp
  ) {
    city(order_by: $order_by, limit: $limit, where: $where) {
      needs_aggregate {
        aggregate {
          count
        }
      }
      name
      id
      district {
        name
      }
      city_translations {
        language
        text
      }
      distributor_cities_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
