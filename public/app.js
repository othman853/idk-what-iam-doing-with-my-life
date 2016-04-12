var React = require('react');
var App = React.createFactory(require('./js/App.jsx'));

if (typeof window !== 'undefined') {
  window.onload = () => React.render(App(), document.getElementById('render-here'));
}
