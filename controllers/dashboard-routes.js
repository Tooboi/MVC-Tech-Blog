const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session.user_id);

  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'post_header', 'post_body', 'user_id'],
    include: [
      {
        model: comment,
        attributes: ['id', 'post_id', 'comment_body', 'user_id'],
        include: {
          model: User,
          attributes: ['name'],
        },
      },
      {
        model: user,
        attributes: ['name']
      }
    ],
  })
    .then((dbPostData) => {
      console.log(Post);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('dashboard', {
        posts,
        logged_in: req.session.logged_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
