const express = require('express');
const app = express();
const port = 4000;

app.all('/users', (request, response, next) => {
	response.send('users page');
	next();		
})

app.get('/posts', (request, response) => {
	response.send('posts page');
})

app.listen(port, (req, res) => {
    	console.log('Server is running!');
})
