var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function(){
    return {items: [], newMessageText: ''};
  },

  onChange: function(e) {
    this.setState({newMessageText: e.target.value});
  },

  handleClick: function(e){
    e.preventDefault();
    var currentItems = this.state.items;

    currentItems.push(this.state.newMessageText);

    this.setState({items: currentItems, newMessageText: ''});
  },

  render: function(){
    return (
      <div>
        <h3>
          {this.props.title}
        </h3>
        <form onSubmit={this.handleClick}>
          <input onChange={this.onChange} value={this.state.newMessageText}></input>
          <button>Add</button>
        </form>
        <List items={this.state.items}></List>
      </div>
    );
  }
});

module.exports = ListManager;
