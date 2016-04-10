var load = require('express-load');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

app.set('view engine', 'ejs');

load('routes')
  .into(app);

server.listen(3000, () => console.log('Up on port 3000'));
