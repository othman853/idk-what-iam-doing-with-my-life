var jsx = require('node-jsx').install({harmony: 'true', extension: '.jsx'});

var React = require('react');
var ReactDOM = require('react-dom/server');
var App = React.createFactory(require('../public/components/App'));

module.exports = (app) => {

  app.get('/', (request, response) => {

    var markup = ReactDOM.renderToString(App());

    response.render('home', { markup: markup });

    response.end();

  });

}
