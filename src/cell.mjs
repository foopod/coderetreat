function createArray(x) {
  var arr = new Array(x);
  for (var i = 0; i < x; i++) {
    arr[i] = new Array(x);
    for (var j = 0; j < x; j++) {
      arr[i][j] = false;
    }
  }
  return arr;
}

export function isAlive(currentState, numberOfNeighbours) {
  return !((numberOfNeighbours > 3 || numberOfNeighbours < 2) || (!currentState && numberOfNeighbours != 3));
}

export function countNeighbours(seed) {
  var count = 0;
  for (var x = 0; x < seed.length; x++) {
    for (var y = 0; y < seed[x].length; y++) {
      if (!(y === 1 && x === 1) && seed[x][y]) {
        count++;
      }
    }
  }
  return count;
}

export function getSubGrid(x, y, grid) {
  var subGrid = createArray(3, 3);
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      if (grid[x + i] === undefined || grid[x + i][y + j] === undefined) {
        subGrid[i + 1][j + 1] = false;
      } else {
        subGrid[i + 1][j + 1] = grid[x + i][y + j];
      }
    }
  }
  return subGrid;
}