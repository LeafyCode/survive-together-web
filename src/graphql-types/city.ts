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
