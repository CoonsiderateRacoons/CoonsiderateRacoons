var express = require('express');
var db = require('./db');

var app = express();

app.use(express.static('public'));

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log('now listening on port: ', port);
})
