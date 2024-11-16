const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const sequelize = require('./config/database');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

//Graphql endpoint
app.use('/graphql',graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));

//connect to the database and start server
sequelize.sync({ alter:true}).then(()=>{
    console.log('Connected to the database.');
    app.listen(8000, ()=> console.log('Server running on port 8000/graphql'));
});