const express = require('express');
const app = express();
const blogController = require('../controllers/blogController');
const {body} = require('express-validator');

const {store, index, show, update, destroy} = blogController;

app.post(
    '/v1/blog/post',[
        body('title').isLength({min: 5}),
        body('body').isLength({min: 10})
    ],
    store
);

app.get('/v1/blogs', index);

app.get('/v1/blogs/:blogTitle', show);

app.route('/v1/blog/:blogId')
    .put(update)
    .delete(destroy)

module.exports = app;