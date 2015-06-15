var Reflux = require('reflux');
var CommandLineActions = require('../actions/CommandLineActions');
var TaskActions = require('../actions/taskActions');
var GroupActions = require('../actions/GroupActions');
var CommandLine = require('../../CommandLine/index');

var actions = {
  'column': GroupActions,
  'task': TaskActions
}

var CommandLineStore = Reflux.createStore({
  listenables: CommandLineActions,

  onSend: function(newCommand) {
    var item = CommandLine.send(newCommand);
    actions[item.type][item.action](item.data);
    this.trigger('');
  },

  getInitialState: function() {
    return {command: 'use gr1'};
  }

});

module.exports = CommandLineStore;