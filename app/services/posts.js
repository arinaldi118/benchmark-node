const { posts } = require('../models');
const errors = require('../errors');

exports.post = id =>
  posts.findOne({ where: { id } }).catch(err => {
    throw errors.databaseError(err.message);
  });

exports.posts = () =>
  posts.findOne().catch(err => {
    throw errors.databaseError(err.message);
  });
