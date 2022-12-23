const { Comment } = require('../models');

const commentData = [
  {
    comment_body: 'This is a comment',
    post_id: '3',
    user_id: '3',
  },
  {
    comment_body: 'This is a comment',
    post_id: '4',
    user_id: '4',
  },
  {
    comment_body: 'This is a comment',
    post_id: '1',
    user_id: '5',
  },
  {
    comment_body: 'This is a comment',
    post_id: '2',
    user_id: '4',
  },
  {
    comment_body: 'This is a comment',
    post_id: '4',
    user_id: '5',
  },
  {
    comment_body: 'This is a comment',
    post_id: '3',
    user_id: '3',
  },
  {
    comment_body: 'This is a comment',
    post_id: '1',
    user_id: '3',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;