var React = require('react');
var Todo = require('./todo/Todo.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {
      socketServer : io.connect('http://localhost:3000')
    };
  },

  render: function () {

    return (
      <Todo server={this.state.socketServer}/>
    );
  }

});

module.exports = App;
