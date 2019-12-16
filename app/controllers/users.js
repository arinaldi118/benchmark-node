/* eslint-disbale no-unused-vars */

const userSevices = require('../services/users');

exports.getUser = (req, res, next) => {
  const { id } = req.params;
  return userSevices
    .getUser(id)
    .then(user => res.status(200).send(user))
    .catch(next);
};

exports.getUserWithPosts = (req, res, next) => {
  const { id } = req.params;
  return userSevices
    .getUserWithPosts(id)
    .then(user => res.status(200).send(user))
    .catch(next);
};

exports.getUsers = (_, res, next) =>
  userSevices
    .getUsers()
    .then(users => res.status(200).send({ users }))
    .catch(next);

exports.getUsersWithPosts = (_, res, next) =>
  userSevices
    .getUsersWithPosts()
    .then(users => res.status(200).send({ users }))
    .catch(next);
