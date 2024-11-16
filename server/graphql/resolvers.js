const User = require('../models/user');

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.findAll();
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    addUser: async (_, { name, email, password, role }) => {
      try {
        return await User.create({ name, email, password, role });
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
