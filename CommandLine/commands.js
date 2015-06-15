function addTask(fields) {
  var item = {
    name: fields._[1],
    description: fields.d,
    pos: fields.p
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
    item.newName = item.name;
  }

  return {
    action: 'edit',
    type: 'task',
    data: item
  }
}

function moveTask(fields) {
  return {
    action: 'move',
    type: 'task',
    data: {
      from: fields._[1],
      to: fields._[2]
    }
  }
}

var taskCommands = {
  add: addTask,
  rm: removeTask,
  done: taskDone,
  edit: editTask,
  move: moveTask
}

function addColumn(fields) {
  var data = {
    name: fields.c,
    tasks: [],
    pos: fields.p
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