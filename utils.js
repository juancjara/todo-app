module.exports.getPosition = function(pos, defValue) {
	return pos > -1? pos: defValue;
}