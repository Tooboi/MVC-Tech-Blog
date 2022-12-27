const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  const comData = await Comment.findAll();
  return res.json(comData);
});

module.exports = router;