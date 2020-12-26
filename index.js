const express = require('express');
const app = express();
const usersRoutes = require('./src/routes/users');
const port = 4000;

app.use(usersRoutes);

app.listen(port, () => {
    	console.log('Server is running!');
})