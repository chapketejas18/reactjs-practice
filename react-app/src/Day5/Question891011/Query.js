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

export const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $currency: String!, $phone: String!, $code: String!) {
    addCountry(name: $name, currency: $currency, phone: $phone, code: $code) {
      name
      currency
      phone
      code
    }
  }
`;
