

// Import the models we need.

const { signToken } = require('../utils/auth');

// Enable GraphQL authentication
const { AuthenticationError } = require('apollo-server-express');

// Define the resolvers that will serve the response.
// Below, 'params' is set to either a specified username or null.  If null, all users are returned.
const resolvers = {

    Query: {

        // Return all users
        users: async () => {
            return User.find()
                .select('-__v -password');            // Don't return the password or Mongoose ID

        },

        // Return a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password') ;           // Don't return the password or Mongoose ID

        },
    }

}

module.exports = resolvers;