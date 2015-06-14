var TaskActions = require('../client/actions/taskActions');

function addTask(fields) {
  console.log(fields);
  var task = {
    name: fields._[1],
    description: fields.d,
    done: false
  }
  console.log('add task', task);
  TaskActions.add(task);
}

function removeTask(fields) {
  console.log('remove task', fields[1]);
}

var commands = {
  addTask: addTask,
  del: removeTask
}

function execute(fields) {
  console.log('here', fields._[0]);
  if (fields._[0] === 'add') {
    addTask(fields);
  }
}

module.exports.execute = execute;