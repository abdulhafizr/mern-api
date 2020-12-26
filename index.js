const express = require('express');
const app = express();
const usersRoutes = require('./src/routes/users');
const port = 4000;

app.use((request, response, next) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
})
app.use(usersRoutes);

app.listen(port, () => {
    	console.log('Server is running!');
})