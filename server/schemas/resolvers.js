

// Import the models we need.
const { User } = require( '../models' );

const { signToken } = require('../utils/auth');

// Enable GraphQL authentication
const { AuthenticationError } = require('apollo-server-express');

// Define the resolvers that will serve the response.
// Below, 'params' is set to either a specified username or null.  If null, all users are returned.
const resolvers = {

    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('books');
          
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
        },
      
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
    },

  // Add the necessary mutations here (for the CRUD operations of Post, Put, and Delete)
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);   // a new user is created based on 'args'
      const token = signToken( user );
    
      return { token, user };                 // return a new object combining the token and user data
    },

    login: async (parent, { email, password }) => {

      // Find the user by 'email', and if not found throw error
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      // If 'email' was found, verify password, throw error on mismatch.
      const correctPw = await user.isCorrectPassword(password);    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken( user );
    
      return { token, user };
    },

    
    // Add a savedBook to a user
    saveBook: async (parent, { userId, bookBody }, context) => {
        if (context.user) {
          const updatedUser = await Thought.findOneAndUpdate(
            { _id: userId },
            { $push: { books: { bookBody, username: context.user.username } } },
            { new: true, runValidators: true }    // return the updated object
          );
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
  }    

}

module.exports = resolvers;