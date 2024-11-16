const sequelize = require('./config/database');
const User = require('./models/user');

(async () => {
  await sequelize.sync({ force: true }); // Reset the database
  console.log('Database synced.');

  await User.bulkCreate([
    { name: 'Sujan', email: 'sujan@example.com', password: 'password123', role: 'admin' },
    { name: 'Boby', email: 'boby@example.com', password: 'password123', role: 'teacher' },
    { name: 'Charlie', email: 'charlie@example.com', password: 'password123', role: 'student' },
  ]);

  console.log('Seed data added.');
})();