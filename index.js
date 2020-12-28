const express = require('express');
const app = express();
const usersRoutes = require('./src/routes/users');
const blogsRoutes = require('./src/routes/blogs');
const port = 4000;
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// handle CORS origin
app.use((request, response, next) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
})

app.use(usersRoutes);
app.use(blogsRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => {
		app.listen(port, () => {
			console.log('Connection successfully');
		})
	})
	.catch((error) => {
		console.log(error)
	})