/* eslint-disbale no-unused-vars */

const postsServices = require('../services/posts');

exports.getPost = (req, res, next) => {
  const { id } = req.params;
  return postsServices
    .getPost(id)
    .then(post => res.status(200).send(post))
    .catch(next);
};

exports.getPosts = (_, res, next) =>
  postsServices
    .getUsers()
    .then(posts => res.status(200).send({ posts }))
    .catch(next);
