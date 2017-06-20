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

    var customSeshStyle = {
      marginTop: 10
    }

    var headingStyle = {

    }

    if (this.props.headingColor){
      headingStyle.background = this.props.headingColor;
    }

    return (
      <div style={customSeshStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3>
              {this.props.title}
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleClick}>
              <div className="col-sm-8">
                <input className="form-control" onChange={this.onChange} value={this.state.newMessageText}></input>
              </div>
              <div className="col-sm-4">
                <button className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="panel-body">
            <List items={this.state.items}></List>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ListManager;
