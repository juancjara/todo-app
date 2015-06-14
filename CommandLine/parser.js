var yargs = require('yargs');
var regex = /"([^"]+)"|([^"\s]+)/g;

function parse(line) {
  line = line.replace(/\//, ' '); 
  var matched = null;
  var tokens = [];
  while(matched = regex.exec(line)) {
    tokens.push(matched[2] || matched[1]);
  }
  return yargs.parse(tokens);
}

module.exports = parse;
parse.parse = parse;
