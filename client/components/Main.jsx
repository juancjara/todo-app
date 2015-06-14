var React = require('react');
var GroupList = require('./GroupList.jsx');
var CommandLine = require('./CommandLine.jsx');

var Main = React.createClass({
  render() {
    return (
      <div>
        <GroupList />
        <CommandLine />
      </div>
    )
  }
});

module.exports = Main;