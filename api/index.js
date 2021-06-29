const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const user = require('./components/user/network');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());

app.listen(3000, () => {
    console.log('Api escuchando en el puerto', 3000);
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ usuario: 'dario' }));
  })

app.get('/user/:user', function (req, res) {
    res.send(req.params.user);
})

//Router
app.use('/api/user', user);