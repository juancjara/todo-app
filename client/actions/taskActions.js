var Reflux = require('reflux');

var TaskActions = Reflux.createActions([
  'add',
  'remove',
  'done',
  'edit',
  'move',
  'set'
]);

module.exports = TaskActions;