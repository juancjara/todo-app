var React = require('react');
var Reflux = require('reflux');
var TaskStore = require('../stores/taskStore');

var Task = React.createClass({

  render: function() {
    var task = this.props.item;
    return (
      <div className = 'task'>
        <input 
          className = 'same-line' 
          type = "checkbox"
          checked = {this.props.item.done}
          disabled />
        <span>{task.name}</span>
        <div>{task.description}</div>
      </div>
    );
  }
});

var TaskList = React.createClass({  
  render: function() {

    var tasks = this.props.tasks.map(function(item, i) {
        return <Task key = {i} item = {item} />
      }.bind(this));

    return (
      <div>
        {tasks}
      </div>
    );
  }

});

module.exports = TaskList;
