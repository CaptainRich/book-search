

import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
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
  mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
          bookId
          authors
          image
          link
          title
          description
      }
    }
  }
`;


export const REMOVE_BOOK = gql`
  mutation removeBook($userId: ID!, $BookInput: BookInput!) {
    removeBook(userId: $userId, BookInput: $BookInput) {
      _id
      username
      email
      bookCount
      savedBooks {
          bookId
          authors
          image
          link
          title
          description
      } 
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