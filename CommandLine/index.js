var parser = require('./parser');
var commands = require('./commands.js');

module.exports.send = function(line) {
  var tokens = parser.parse(line);
  return commands.execute(tokens);
}