const { posts } = require('../models');
const errors = require('../errors');

exports.getPost = id =>
  posts.findOne({ where: { id } }).catch(err => {
    throw errors.databaseError(err.message);
  });

exports.getPosts = () =>
  posts.findAll().catch(err => {
    throw errors.databaseError(err.message);
  });
