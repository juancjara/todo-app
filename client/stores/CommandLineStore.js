var Reflux = require('reflux');
var CommandLineActions = require('../actions/CommandLineActions');
var TaskActions = require('../actions/taskActions');
var GroupActions = require('../actions/GroupActions');
var CommandLine = require('../../CommandLine/index');

var CommandLineStore = Reflux.createStore({
  listenables: CommandLineActions,

  onSend: function(newCommand) {
    var item = CommandLine.send(newCommand);
    var actions = {}
    if (item.type === 'column') {
      actions = GroupActions;
    }
    if (item.type === 'task') {
      actions = TaskActions;
    }
    actions[item.action](item.data);
    this.trigger('');
  },

  getInitialState: function() {
    return {command: 'add "task 1"'};
  }

});

module.exports = CommandLineStore;