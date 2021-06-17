const express = require('express');
const bodyParser = require('body-parser');

var app = express()

app.listen(3000, () => {
    console.log('Api escuchando en el puerto', 3000);
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
  })