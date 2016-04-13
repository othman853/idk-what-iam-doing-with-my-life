var React = require('react');
var TodoList = require('./TodoList.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {
      socketServer : io.connect('http://localhost:3000')
    };
  },

  render: function () {
    this.state.socketServer.emit('new todo', {name: 'Yo'});

    return (
      <TodoList server={this.state.socketServer}/>
    );
  }

});

module.exports = App;
