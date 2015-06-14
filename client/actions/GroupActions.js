var Reflux = require('reflux');

var CommandLineActions = Reflux.createActions([
  'add', 'remove', 'edit', 'select'
]);

module.exports = CommandLineActions;