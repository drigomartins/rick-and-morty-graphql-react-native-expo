import { gql } from '@apollo/client';

export const GET_ALL_CHARACTER = gql`
  query {
    characters {
      results {
        id
        image
        name
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      created
      gender
      id
      image
      name
      status
      type
      species
    }
  }
`;
