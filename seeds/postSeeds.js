const { Post } = require('../models');

const postData = [
  {
    user_id: '2',
    post_header: 'There\'s a thing you should know',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    user_id: '3',
    post_header: 'There\'s a something you shouldn\'t know',
    post_body: 'Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Rhoncus mattis rhoncus urna neque viverra. Ridiculus mus mauris vitae ultricies leo integer malesuada. Vestibulum morbi blandit cursus risus at ultrices. ',
  },
  {
    user_id: '3',
    post_header: 'Water under the bridge',
    post_body: 'Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Adipiscing bibendum est ultricies integer quis. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.',
  },
  {
    user_id: '5',
    post_header: 'Grass is always greener',
    post_body: 'Pellentesque pulvinar pellentesque habitant morbi. Consectetur lorem donec massa sapien. Convallis posuere morbi leo urna.',
  },
  {
    user_id: '1',
    post_header: 'Boogers and small tables',
    post_body: 'Est pellentesque elit ullamcorper dignissim. Est sit amet facilisis magna. Neque volutpat ac tincidunt vitae semper. ',
  },
];


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;