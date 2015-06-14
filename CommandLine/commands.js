function addTask(fields) {
  var item = {
    name: fields._[1],
    description: fields.d
  }
  return {
    action: 'add',
    type: 'task',
    data: item
  }
}

function removeTask(fields) {
  return {
    action: 'remove',
    type: 'task',
    data: fields._[1]
  }
}

function taskDone(fields) {
  return {
    action: 'done',
    type: 'task',
    data: fields._[1]
  }
}

function editTask(fields) {
  var item = {
    name: fields._[1],
    newName: fields._[2],
    description: fields.d
  }

  if (fields._[2] === undefined) {
    console.log('here');
    item.newName = item.name;
  }

  return {
    action: 'edit',
    type: 'task',
    data: item
  }
}

var taskCommands = {
  add: addTask,
  rm: removeTask,
  done: taskDone,
  edit: editTask
}

function addColumn(fields) {
  var data = {
    name: fields.c,
    tasks: []
  }
  return {
    action: 'add',
    type: 'column',
    data: data
  }
}

function removeColumn(fields) {
  return {
    action: 'remove',
    type: 'column',
    data: fields.c
  }
}

function selectColumn(fields) {
  return {
    action: 'select',
    type: 'column',
    data: fields._[1]
  }
}

var columnCommands = {
  add: addColumn,
  rm: removeColumn,
  use: selectColumn
}

function execute(fields) {
  if (fields.c || fields._[0] === 'use') {
    return columnCommands[fields._[0]](fields);
  }

  return taskCommands[fields._[0]](fields);
}

module.exports = execute;
execute.execute = execute;