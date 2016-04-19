var React = require('react');

var Todo = React.createClass({

  getInitialState: function (){
    return {
      title: 'Hello User!'
    };
  },

  componentDidMount: function() {
    document
      .getElementById('new-item-button')
      .addEventListener('click', this.newItem);

    this.props.server.on('some response', this.handleSomeResponse);
  },

  handleSomeResponse: function(data) {
    this.setState(data);
  },

  newItem: function () {
    this.props.server.emit('new todo', {name: 'A Todo'})
  },

  render: function () {
    return (
      <div>
        <h1>
          {this.state.title}
        </h1>

        <button id="new-item-button"> New Item</button>
      </div>
    );
  }

});

module.exports = Todo;
