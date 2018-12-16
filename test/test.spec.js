
var calculate = require('../src/cell')
// Require the built in 'assertion' library
var assert = require('assert');
// Create a group of tests about Arrays
describe('CellTools', function() {
  // Within our Array group, Create a group of tests for indexOf
  describe('calculate', function() {
    // A string explanation of what we're testing
    it('stays alive if has 2 neighbours alive', function(){
      // Our actual test: -1 should equal indexOf(...)
      assert.equal(true, calculate(true, 2));
    });
  });
});