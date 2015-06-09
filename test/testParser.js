var chai = require('chai');
var assert = chai.assert;
var parser = require('../parser');

describe('parser', function() {
  it('parse', function() {
    var tokens = [
      'add', '-t', 'task 1'
    ]
    assert.deepEqual(parser.parse('add -t "task 1"'), tokens);
  })
})