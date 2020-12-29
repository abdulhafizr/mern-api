// express setup
const express = require('express');
const app = express();

// static file setup
const path = require('path');

// multer setup
const multer = require('multer');

// mongodb local setup
const mongoose = require('mongoose');

// images handling
// file storage
const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "assets/images");
  },
  filename: (request, file, callback) => {
    callback(null, `${new Date().getTime()}-${file.originalname}`)
  }
})

// valid images
const validImages = [
  "image/png",
  "image/jpg",
  "image/jpeg"
];

// file filter
const fileFilter = (req, file, callback) => {
  if(validImages.includes(file.mimetype)) {
    callback(null, true);
  }else{
    callback(null, false);
  }
}

// default
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));
app.use(multer({storage, fileFilter}).single('image'));

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