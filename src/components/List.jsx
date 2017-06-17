var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {"id": 1, "text": 'one'},
  {"id": 2, "text": 'two'},
  {"id": 3, "text": 'three'},
];

var List = React.createClass({
  render: function(){
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text}></ListItem>;
    });

    return (
      <ul>{listItems}</ul>
    )
  }
});

module.exports = List;
