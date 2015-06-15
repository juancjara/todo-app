var Reflux = require('reflux');
var GroupActions = require('../actions/GroupActions');
var TaskActions = require('../actions/taskActions');
var TaskStore = require('./taskStore');

var selected = null;

var groups = [
  {
    name: 'gr1',
    tasks: [
      {name: 'task', description: 'des', done: false},
      {name: 'task2', description: 'des2', done: false},
      {name: 'task3', description: 'des3', done: false}
    ]
  },
  {
    name: 'group 2',
    tasks: [
      {name: 'task4', description: 'des4', done: false}
    ]
  }  
];

var GroupStore = Reflux.createStore({

  listenables: GroupActions,

  init: function() {
    this.listenTo(TaskStore, this.updateTasks);
  },

  onAdd: function(item) {
    var pos = item.pos > -1 ? item.pos: groups.length;
    groups.splice(pos, 0, item);
    this.trigger(groups);
  },

  onRemove: function(name) {
    groups = groups.filter(function(e) {
      return e.name !== name;
    })

    this.trigger(groups);
  },

  onEdit: function(data) {
    groups.forEach(function(t) {
      if (t.name === data.name) {
        t.name = data.newName;
      }
    });

    this.trigger(groups);
  },

  onSelect: function(name) {
    selected = groups.filter(function(g) {
      return g.name === name;
    })[0];
    
    TaskActions.set(selected.tasks);
  },

  updateTasks: function(tasks) {
    selected.tasks = tasks;
    this.trigger(groups);
  },

  getInitialState: function() {
    return groups;
  }

});

module.exports = GroupStore;
