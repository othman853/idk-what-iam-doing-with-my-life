'use strict';
var load = require('express-load');
var handlebars = require('express-handlebars');
var mongoose = require('mongoose');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

if (!process.env.TODOS_AND_EXPENSES_DB_URL) {
  console
    .error('THERE IS NO DATABASE URL DEFINED ON THIS ENVIRONMENT');
  process.exit(1);
}

global.database = mongoose.connect(process.env.TODOS_AND_EXPENSES_DB_URL, (error) => {

  if (error) {
    console
      .error('THERE WAS AN ERROR WHILE ATTEMPTING TO CONNECT TO SPECIFIED DATABASE: ' + error );
    process.exit(1);
  }

  app.engine('handlebars', handlebars());
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');

  app.use('/', express.static(__dirname + '/public/'));

  load('routes')
    .into(app);

  server.listen(3000, () => console.log('Up on port 3000'));

});
