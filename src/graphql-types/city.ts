import { gql } from "apollo-boost";

export const CITIES = gql`
  query City {
    city {
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
