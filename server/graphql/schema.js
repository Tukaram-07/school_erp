const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
     id: ID!
     name:String!
     email: String!
     role:String! 
    }

    type Query {
     users:[User!]!
    }

    type Mutation {
     addUser(name: String!, email: String!, password: String!, role: String!): User!
    }
     
`);


