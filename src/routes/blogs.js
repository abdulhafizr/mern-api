const express = require('express');
const app = express();
const blogController = require('../controllers/blogController');

const {store, index, show, update, destroy} = blogController;

app.post('/v1/blog/post', store);

app.get('/v1/blogs', index);

app.get('/v1/blogs/:blogTitle', show);

app.route('/v1/blog/:blogId')
    .put(update)
    .delete(destroy)

module.exports = app;