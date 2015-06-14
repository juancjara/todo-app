var Reflux = require('reflux');
var TaskActions = require('../actions/taskActions');

var taskList = [];

var TaskStore = Reflux.createStore({

  listenables: TaskActions,
  
  onAdd: function(item) {
    taskList.push(item);
    this.trigger(taskList);
  },

  onRemove: function(name) {
    taskList = taskList.filter(function(e) {
      return e.name !== name;
    })

    this.trigger(taskList);
  },

  onDone: function(name) {
    taskList.forEach(function(t) {
      if (t.name === name) {
        t.done = true;
      }
    })

    this.trigger(taskList);
  },

  onEdit: function(data) {
    taskList.forEach(function(t) {
      if (t.name === data.name) {
        t.name = data.newName;
        t.description = data.description || t.description;
      }
    });
    
    this.trigger(taskList);
  },

  onSet: function(tasks) {
    taskList = tasks;
  },


});

module.exports = TaskStore;