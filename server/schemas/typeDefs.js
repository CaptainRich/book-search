

// Import the GraphQL (gql) tagged template function
const { gql } = require('apollo-server-express');

// Create our typeDefs
const typeDefs = gql`

# Note 
type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}
  
# Note 'books' are part/children of 'users'
type Book {
  _id: ID
  bookId: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]   
          
  }
  
  # Define the authentication token.  Auth must return a token, but user data is optional.
  type Auth {
    token: ID!
    user: User
  } 

`;


// Export the typeDefs
module.exports = typeDefs;