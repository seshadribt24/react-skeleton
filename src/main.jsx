var React = require('react');
var ReactDom = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDom.render(<ListManager title="Ingedients List"></ListManager>, document.getElementById('show_ingredients'));
