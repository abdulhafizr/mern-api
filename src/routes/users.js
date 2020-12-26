const express = require('express');
const app = express();
const userController = require('../controllers/userController');

const {get, post} = userController;

app.route('/users')
    .get(get)
    .post(post)

module.exports = app;