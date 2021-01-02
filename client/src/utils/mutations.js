

import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $bookInput: bookInput!) {
    saveBook(userId: $userId, bookInput: $bookInput) {
      _id
      bookCount
      books {
        _id
        bookInput
      }
    }
  }
`;


export const REMOVE_BOOK = gql`
  mutation removeBook($userId: ID!, $bookInput: bookInput!) {
    removeBook(userId: $userId, bookInput: $bookInput) {
      user
    }
  }
`;



// export const SEARCH_GOOGLE_BOOKS = gql`
//   mutation searchGoogleBooks( $query: String!) {
//     searchGoogleBooks( query: "https://www.googleapis.com/books/v1/volumes?q=$query" ) {
//       books {
//         _id
//         bookInput
//       }
//     }
//   }
// `;