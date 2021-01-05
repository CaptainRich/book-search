

import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
      }
    }
  }
`;

export const GET_ME = gql`
  query me( $id: ID!) {
    me ( _id: $id ) {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        bookId
        Authors
        description
        title
        image
        link
      }
    }
  }
`;

export const GET_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        bookId
        title
      }
    }
  }
`;