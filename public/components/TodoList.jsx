var React = require('react');

var TodoList = React.createClass({

  getInitialState: function (){
    return {
      title: 'Hello User!'
    };
  },

  newItem: function () {
    console.log("New Item Button was clicked.");
    alert('Oh Shit!');
  },

  render: function () {
    return (
      <div>
        <h1>
          {this.state.title}
        </h1>

        <button onClick={() => console.log('jjjj')}>New Item</button>
      </div>
    );
  }

});

module.exports = TodoList;
