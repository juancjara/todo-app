var React = require('react');
var CommandLineStore = require('../stores/CommandLineStore');
var CommandLineActions = require('../actions/CommandLineActions');

var CommandLine = React.createClass({

  getInitialState: function() {
    return CommandLineStore.getInitialState();
  },

  onStateChange: function(status) {
    this.setState({command: status});
  },

  componentDidMount: function() {
    this.unsubscribe = CommandLineStore.listen(this.onStateChange);
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  onSubmit: function(e) {
    e.preventDefault();
    CommandLineActions.send(this.state.command);
  },

  onChange: function(e) {
    this.setState({command: e.target.value});
  },

  render() {
    var logs = null;
    return (
      <div>
        {logs}
        <form onSubmit = {this.onSubmit}>
          <input 
            type = 'text' 
            value = {this.state.command}
            onChange = {this.onChange}
            autoFocus = {true} />
        </form>
      </div>
    );
  }
});

module.exports = CommandLine;