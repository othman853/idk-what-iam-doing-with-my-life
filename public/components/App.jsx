var React = require('react');
var TodoList = require('./TodoList.jsx');

var App = React.createClass({

  render: function () {

    return (
      <TodoList />
    );
  }

});

module.exports = App;
