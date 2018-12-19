var cell = require('src/cell');

var ctx;
var canvas;
var seedSize = 10;
var x = 0;
var y = 0;
var gridSize = 250;
var grid;

function init() {
  canvas = document.getElementById('app');
  ctx = canvas.getContext('2d');
  resizeCanvas();

  //create grid
  grid = createArray(gridSize, gridSize);

  //randomize centre of grid
  for (var x = 1 + 50; x < gridSize - 1 - 50; x++) {
    for (var y = 1 + 50; y < gridSize - 1 - 50; y++) {
      if (Math.random() < 0.1) {
        grid[x][y] = true;
      }
    }
  }

  setInterval(run, 100);
}

// loop
function run() {
  drawGrid(grid);
  var tempGrid = createArray(gridSize, gridSize);
  for (var x = 0; x < gridSize; x++) {
    for (var y = 0; y < gridSize; y++) {
      tempGrid[x][y] = cell.isAlive(grid[x][y], cell.countNeighbours(x, y, grid));
    }
  }
  grid = tempGrid;

}


/*===================================*/
/*             Utilities             */
/*===================================*/

function drawCell(isAlive, x, y) {
  if (isAlive) {
    ctx.fillStyle = '#000000';
  } else {
    ctx.fillStyle = '#FFFFFF';
  }

  ctx.fillRect(x * size, y * size, size, size);
}

function drawGrid(grid) {
  for (var x = 3; x < gridSize - 3; x++) {
    for (var y = 3; y < gridSize - 3; y++) {
      drawCell(grid[x][y], x, y);
    }
  }
}
function resizeCanvas(e) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}