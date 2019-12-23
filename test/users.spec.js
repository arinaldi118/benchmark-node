/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-parens */
// const supertest = require('supertest');
const { factory } = require('factory-girl');
// const app = require('../app');
const { factoryByModel } = require('./factory/factory_by_models');

factoryByModel('users', false);
factoryByModel('posts', false);

factory.extend('users', 'woloxUser', {
  name: factory.chance('name', { nationality: 'en' }),
  username: factory.chance('twitter'),
  email: factory.chance('email', { domain: 'wolox.com' })
});

factory.extend('posts', 'woloxPost', {
  title: factory.chance('sentence', { words: 5 }),
  content: factory.chance('paragraph'),
  upvotes: factory.chance('natural', { max: 20 }),
  downvotes: factory.chance('natural', { max: 20 })
});

describe('Some test', () => {
  it('some test', done =>
    factory.createMany('woloxUser', 20).then(users => {
      const usersMapped = users.map(user => user.dataValues);
      console.log(usersMapped);
      Promise.all(
        usersMapped.map(user => factory.createMany('woloxPost', 20, { userId: user.id }))
      ).then(posts => {
        const postsMapped = posts.map(post => post.dataValues);
        console.log(postsMapped);
        done();
      });
    }));
});
