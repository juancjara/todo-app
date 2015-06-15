var React = require('react');
var GroupStore = require('../stores//GroupStore');
var TaskList = require('./TaskList.jsx');

var GroupItem = React.createClass({

  render: function() {
    return (
      <div className = 'group same-line'>
        <h3>{this.props.name}</h3>
        <TaskList tasks = {this.props.tasks} />
      </div>
    );
  }

});

var GroupList = React.createClass({

  getInitialState: function() {
    return {list: GroupStore.getInitialState()};
  },

  onTaskChange: function(status) {
    this.setState({list: status});
  },

  componentDidMount: function() {
    this.unsubscribe = GroupStore.listen(this.onTaskChange);
  },

  componentWillUnmountfunction: function() {
    this.unsubscribe();
  },

  render: function() {
    var groups = this.state.list.map(function(item, i) {
      return <GroupItem key = {i} name = {item.name} tasks = {item.tasks} />
    }.bind(this));

    return (
      <div>
        {groups}
      </div>
    );
  }

});

module.exports = GroupList;