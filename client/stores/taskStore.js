var Reflux = require('reflux');
var TaskActions = require('../actions/taskActions');

var taskList = [];

var TaskStore = Reflux.createStore({

  listenables: TaskActions,
  
  onAdd: function(item) {
    var pos = item.pos > -1 ? item.pos: taskList.length;
    taskList.splice(pos, 0, item);
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

  onMove: function(data) {
    taskList[data.to] = taskList.splice(data.from, 1, taskList[data.to])[0];
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