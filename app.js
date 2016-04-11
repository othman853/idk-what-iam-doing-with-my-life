var load = require('express-load');
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var app = express();
var server = http.createServer(app);

if (!process.env.TODOS_AND_EXPENSES_DB_URL) {
  console
    .error('THERE IS NO DATABASE URL DEFINED ON THIS ENVIRONMENT');
  process.exit(1);
}

global.database = mongoose.connect(process.env.TODOS_AND_EXPENSES_DB_URL, (error) => {

  if (error) {
    console.error('THERE WAS AN ERROR WHILE ATTEMPTING TO CONNECT TO SPECIFIED DATABSE: ' + error );
    process.exit(1);
  }

  app.set('view engine', 'ejs');

  load('routes')
    .into(app);

  server.listen(3000, () => console.log('Up on port 3000'));
  
});
