module.exports.getPosition = function(pos, defValue) {
  return pos > -1? pos: defValue;
}

module.exports.isNumber = function(value) {
  return typeof value === 'number';
}