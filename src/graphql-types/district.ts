import { gql } from "apollo-boost";

export const DISTRICT = gql`
  query District($where: district_bool_exp) {
    district(where: $where) {
      name
      id
    }
  }
`;
