var React = require('react');
var ReactDom = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDom.render(<ListManager title="Ingredients List"></ListManager>, document.getElementById('ingredients'));
ReactDom.render(<ListManager title="Shopping List"></ListManager>, document.getElementById('shopping'));
ReactDom.render(<ListManager title="Christmas List" headingColor="red"></ListManager>, document.getElementById('christmas'));
