import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query Query {
    countries {
      currency
      name
      phone
      code
    }
  }
`;
