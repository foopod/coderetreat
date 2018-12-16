var mymethods = require('../src/cell')
var isAlive = mymethods.isAlive;
var getAliveNeighbours = mymethods.getAliveNeighbours;


var assert = require('assert');
describe('cell', function() {
  describe('isAlive', function() {
    it('stays alive if has 2 or 3 neighbours alive', function(){
      assert.equal(true, isAlive(true, 2));
      assert.equal(true, isAlive(true, 3));
    });
    it('becomes alive if has exactly 3 neighbours alive', function(){
      assert.equal(true, isAlive(false, 3));
    });
    it('dies if has less than 2 neighbours alive', function(){
      assert.equal(false, isAlive(true, 0));
      assert.equal(false, isAlive(true, 1));
    });
    it('dies if has more than 3 neighbours alive', function(){
      assert.equal(false, isAlive(true, 4));
      assert.equal(false, isAlive(true, 5));
      assert.equal(false, isAlive(true, 6));
      assert.equal(false, isAlive(true, 7));
      assert.equal(false, isAlive(true, 8));
    });
  });
});

describe('neighbours', function() {
  it('returns 0 if no neighbours', function() {
    assert.equal(0, getAliveNeighbours([[false, false, false], [false, false, false], [false, false, false] ]));
    assert.equal(0, getAliveNeighbours([[false, false, false], [false, true, false], [false, false, false] ]));
  });
  it('returns 1 if one neighbour', function() {
    assert.equal(1, getAliveNeighbours([[true, false, false], [false, false, false], [false, false, false] ]));
    assert.equal(1, getAliveNeighbours([[true, false, false], [false, true, false], [false, false, false] ]));
  });
})