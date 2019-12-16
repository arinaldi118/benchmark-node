const { healthCheck } = require('./controllers/healthCheck');
const userControllers = require('./controllers/users');
const postControllers = require('./controllers/posts');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/users/:id', userControllers.getUser);
  app.get('/users_with_posts/:id', userControllers.getUserWithPosts);
  app.get('/users', userControllers.getUsers);
  app.get('/users_with_posts', userControllers.getUsersWithPosts);
  app.get('/posts/:id', postControllers.getPost);
  app.get('/posts', postControllers.getPosts);
};
