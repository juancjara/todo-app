
var regex = /"([^"]+)"|([^"\s]+)/g;

function parse(line) {
  var matched = null;
  var tokens = [];
  while(matched = regex.exec(line)) {
    tokens.push(matched[2] || matched[1]);
  }
  return tokens;
}

module.exports = parse;
parse.parse = parse;

