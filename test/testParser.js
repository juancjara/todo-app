var chai = require('chai');
var assert = chai.assert;
var parser = require('../parser');

describe('parser', function() {
  it('parse add "task 1"', function() {
    var tokens = ['add', 'task 1'];
    assert.deepEqual(parser.parse('add "task 1"')._, tokens);
  })
})

/*
describe('command add', function() {
  it('throws not array', function() {
    assert.throw(function() {
      parser.add('sdfass')
    }, "add args wasn't array");
  })
})

*/