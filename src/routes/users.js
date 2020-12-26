const express = require('express');
const app = express();
const userController = require('../controllers/userController');

const {index, show, store, update, destroy} = userController;

app.get('/users', index);

app.get('/users/:userId', show);

app.post('/user', store);

app.route('/user/:userId')
    .put(update)
    .delete(destroy);

module.exports = app;