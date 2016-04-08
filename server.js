'use strict';

var server = {};
server.dependencies = ['http', 'express'];

server.build = (dependencies) => {

  function Server (modules){};

  Server.prototype.start = () => {};
  Server.prototype.finish = () => {};

  return new Server(dependencies);
};

module.exports = server;
