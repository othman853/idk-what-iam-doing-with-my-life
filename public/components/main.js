var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createFactory(require('./App.jsx'));

if (typeof window !== 'undefined') {

  window.onload = function () {
    ReactDOM.render(App(), document.getElementById('render-here'));
  }

}
