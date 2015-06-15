var Reflux = require('reflux');
var TaskActions = require('../actions/taskActions');
var utils = require('../../utils');

var taskList = [];

var TaskStore = Reflux.createStore({

  listenables: TaskActions,
  
  onAdd: function(item) {
    var pos = item.pos > -1 ? item.pos: taskList.length;
    taskList.splice(pos, 0, item);
    this.trigger(taskList);
  },

  onRemove: function(name) {
    if (utils.isNumber(name)) {
      taskList.splice(name, 1);
      this.trigger(taskList);
      return;
    }

    taskList = taskList.filter(function(e) {
      return e.name !== name;
    })

    this.trigger(taskList);
  },

  onDone: function(name) {
    if (utils.isNumber(name)) {
      taskList[name].done = true;
      this.trigger(taskList);
      return;
    }

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
    var update = function udpate(elem, newData) {
      elem.name = newData.newName;
      elem.description = newData.description || elem.description;
    }

    if (utils.isNumber(data.name)) {
      update(taskList[data.name], data)
      this.trigger(taskList);
    }

    taskList.forEach(function(t) {
      if (t.name === data.name) {
        update(t, data);
      }
    });
    
    this.trigger(taskList);
  },

  onSet: function(tasks) {
    taskList = tasks;
  },


});

module.exports = TaskStore;