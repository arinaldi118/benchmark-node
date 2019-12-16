const { users, posts } = require('../models');
const errors = require('../errors');

exports.getUser = id =>
  users.findOne({ where: { id } }).catch(err => {
    throw errors.databaseError(err.message);
  });

exports.getUserWithPosts = id =>
  users
    .findOne({
      where: { id },
      includes: [{ model: posts }]
    })
    .catch(err => {
      throw errors.databaseError(err.message);
    });

exports.getUsers = () =>
  users.findAll().catch(err => {
    throw errors.databaseError(err.message);
  });

exports.getUsersWithPosts = () =>
  users
    .findAll({
      includes: [{ model: posts }]
    })
    .catch(err => {
      throw errors.databaseError(err.message);
    });
