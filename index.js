const express = require('express');
const app = express();
const port = 4000;

app.listen(port, (req, res) => {
    console.log('Server is running!');
})