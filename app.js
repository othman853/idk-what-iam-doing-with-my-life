var load = require('./loader.js');
var server = load('./server');

console.log('After loading: ');
console.log(require('util').inspect(server, { depth: null }));
console.log('After loading END ');
