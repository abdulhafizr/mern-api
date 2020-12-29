// express setup
const express = require('express');
const app = express();

// mongodb local setup
const mongoose = require('mongoose');

// default
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// routes
const usersRoutes = require('./src/routes/users');
const blogsRoutes = require('./src/routes/blogs');
// port server
const port = 4000;


// handle CORS origin
app.use((request, response, next) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
})

app.use(usersRoutes);
app.use(blogsRoutes);

app.use((error, request, response, next) => {
  const status = error.status || 500;
  const {message, data, method} = error;
  response.status(status).json({
    message,
    data,
    method
  })
})

mongoose.connect("mongodb://127.0.0.1:27017/blog", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(port, () => {
      console.log("Server on the sky");
    })
  })