// express setup
const express = require('express');
const app = express();
const port = 4000;

// mongodb atlas setup
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://abdul:oKKNIDlXcXgIuOtq@cluster0.j22gm.mongodb.net/blog?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
	const collection = client.db("test").collection("devices");
	app.listen(port, () => {
		console.log('Connection successfully');
	})

	// perform actions on the collection object
	client.close();
  });

// routes
// const usersRoutes = require('./src/routes/users');
// const blogsRoutes = require('./src/routes/blogs');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// // handle CORS origin
// app.use((request, response, next) => {
// 	response.setHeader("Access-Control-Allow-Origin", "*");
// 	response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
// 	response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
// 	next();
// })

// app.use(usersRoutes);
// app.use(blogsRoutes);

// app.use((error, request, response, next) => {
// 	response.status(400).json({
// 		error
// 	})
// 	next();
// })