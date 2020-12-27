const express = require('express');
const app = express();
const userController = require('../controllers/userController');

const {register, login, update, destroy} = userController;

app.post('/v1/user', register);

app.get('/v1/users', login);

app.route('/v1/user/:userId')
    .put(update)
    .delete(destroy);

module.exports = app;