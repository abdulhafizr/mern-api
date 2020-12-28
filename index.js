// express setup
const express = require('express');
const app = express();

// mongodb atlas setup
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://abdul:221122@cluster0.j22gm.mongodb.net/blog?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// routes
const usersRoutes = require('./src/routes/users');
const blogsRoutes = require('./src/routes/blogs');
// port server
const port = 4000;

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

client.connect(err => {
    // const collection = client.db("test").collection("devices");
    app.listen(port, () => {
        console.log("Server on the sky");
      })
  // perform actions on the collection object
  client.close();
});