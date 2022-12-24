const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userSeedData = require('./userSeeds.json');
const postSeedData = require('./postSeeds.json');
const commentSeedData = require('./commentSeeds.json');
console.log(userSeedData);
const seedDB = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postSeedData, {});

  await Comment.bulkCreate(commentSeedData, {});

  process.exit(0);
};

seedDB();
