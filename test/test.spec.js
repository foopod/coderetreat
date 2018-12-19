// var cell = require('../src/cell');
import { isAlive, countNeighbours, getSubGrid  } from 'cell';

var assert = require('assert');
describe('determine if cell should come to life, stay alive/dead or die', function() {
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

describe('count a cells alive neighbours',function(){
  it('return 0 if seed has no neighbours',()=>{
    var seed = [[false,false,false], [false,false,false], [false,false,false]];
    assert.equal(false, countNeighbours(seed));
  });
  it('return 1 if seed has one neighbour',()=>{
    var seed = [[false,true,false], [false,false,false], [false,false,false]];
    assert.equal(true, countNeighbours(seed));
  });
  it('return 2 if seed has two neighbour',()=>{
    var seed = [[false,true,false], [true,false,false], [false,false,false]];
    assert.equal(2, countNeighbours(seed));
  });
  it('return 3 if seed has three neighbour',()=>{
    var seed = [[true,true,true], [false,false,false], [false,false,false]];
    assert.equal(3, countNeighbours(seed));
  });
  it('return 4 if seed has four neighbour',()=>{
    var seed = [[true,true,false], [true,false,true], [false,false,false]];
    assert.equal(4, countNeighbours(seed));
  });
  it('return 5 if seed has five neighbour',()=>{
    var seed = [[true,true,true], [true,true,true], [false,false,false]];
    assert.equal(5, countNeighbours(seed));
  });
  it('return 6 if seed has five neighbour',()=>{
    var seed = [[true,true,true], [false,true,true], [true,true,false]];
    assert.equal(6, countNeighbours(seed));
  });
  it('return 7 if seed has five neighbour',()=>{
    var seed = [[true,true,true], [true,false,true], [true,true,false]];
    assert.equal(7, countNeighbours(seed));
  });
  it('return 8 if seed has five neighbour',()=>{
    var seed = [[true,true,true], [true,true,true], [true,true,true]];
    assert.equal(8, countNeighbours(seed));
  });
});

describe('create a 3x3 subgrid around a given cell', function() {
  var testGrid = [[true,true,true,false], [true,false,true,false], [true,true,false,true], [true,true,false,true]];
  it('a value off of the grid is set as false in the subgrid', function(){
    assert.equal(false, getSubGrid(0,0, testGrid)[0][0]);
    assert.equal(false, getSubGrid(0,0, testGrid)[0][1]);
    assert.equal(false, getSubGrid(0,0, testGrid)[1][0]);
   });
  it('the values of the subgrid match that of the grid', function(){
    assert.equal(true, getSubGrid(1,1, testGrid)[0][0]);
    assert.equal(true, getSubGrid(1,1, testGrid)[0][1]);
    assert.equal(true, getSubGrid(1,1, testGrid)[0][2]);
    assert.equal(true, getSubGrid(1,1, testGrid)[1][0]);
    assert.equal(false, getSubGrid(1,1, testGrid)[1][1]);
    assert.equal(true, getSubGrid(1,1, testGrid)[1][2]);
    assert.equal(true, getSubGrid(1,1, testGrid)[2][0]);
    assert.equal(true, getSubGrid(1,1, testGrid)[2][1]);
    assert.equal(false, getSubGrid(1,1, testGrid)[2][2]);
  });
});