var mymethods = require('../src/cell')
var isAlive = mymethods.isAlive;
var countNeighbours = mymethods.countNeighbours;


var assert = require('assert');
describe('isAlive', function() {
  it('stays alive if has 2 or 3 neighbours alive', function(){
    assert.equal(true, isAlive(true, 2));
    assert.equal(true, isAlive(true, 3));
  });
  it('comes to life if it has exactly 3 neighbours', function(){
    assert.equal(true, isAlive(false, 3));
  });
  it('does not come to life if it has < 3 neighbours', function(){
    assert.equal(false, isAlive(false, 2));
  });
  it('dies if it has less than 2 neighbours', function(){
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

describe('count neighbours',function(){
  it('return 0 if seed has no neighbours',()=>{
    var seed = [[0,0,0], [0,0,0], [0,0,0]];
    assert.equal(0, countNeighbours(seed));
  });
  it('return 1 if seed has one neighbour',()=>{
    var seed = [[0,1,0], [0,0,0], [0,0,0]];
    assert.equal(1, countNeighbours(seed));
  });
  it('return 2 if seed has two neighbour',()=>{
    var seed = [[0,1,0], [1,0,0], [0,0,0]];
    assert.equal(2, countNeighbours(seed));
  });
  it('return 3 if seed has three neighbour',()=>{
    var seed = [[1,1,1], [0,0,0], [0,0,0]];
    assert.equal(3, countNeighbours(seed));
  });
  it('return 4 if seed has four neighbour',()=>{
    var seed = [[1,1,0], [1,0,1], [0,0,0]];
    assert.equal(4, countNeighbours(seed));
  });
  it('return 5 if seed has five neighbour',()=>{
    var seed = [[1,1,1], [1,1,1], [0,0,0]];
    assert.equal(5, countNeighbours(seed));
  });
  it('return 6 if seed has five neighbour',()=>{
    var seed = [[1,1,1], [0,1,1], [1,1,0]];
    assert.equal(6, countNeighbours(seed));
  });
  it('return 7 if seed has five neighbour',()=>{
    var seed = [[1,1,1], [1,0,1], [1,1,0]];
    assert.equal(7, countNeighbours(seed));
  });
  it('return 8 if seed has five neighbour',()=>{
    var seed = [[1,1,1], [1,1,1], [1,1,1]];
    assert.equal(8, countNeighbours(seed));
  });
});