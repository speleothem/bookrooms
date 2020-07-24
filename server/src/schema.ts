import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    clubs: [BookClub]!
  }
  type BookClub {
    id: ID!
    clubName: String!
  }
  type Query {
    bookClubs: [BookClub]!
    bookClub(id: ID!): BookClub
    me: User
  }
`;
