const { User } = require('../models');

const userData = [
  {
    username: 'Elfo',
    email: 'imElfo@gmail.com',
    password: 'password123',
  },
  {
    username: 'Cinderella',
    email: 'princess@gmail.com',
    password: 'password123',
  },
  {
    username: 'GreenGiant',
    email: 'beanie@gmail.com',
    password: 'password123',
  },
  {
    username: 'Finn',
    email: 'adventure@gmail.com',
    password: 'password123',
  },
  {
    username: 'Dusty',
    email: 'paradise@gmail.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;