var ctx;
var canvas;


var grid = createArray(10,10);

function run(){
    
    //Loop 100 times
    for(var x = 0; i<10; i++){
        for(var y = 0; i<10; i++){
            isAlive(grid[i][j], )
            drawSquare(i,j)
        }
    }
}




//Setting up the canvas and kicking off our run method
function init(){
    canvas = document.getElementById('app');
	ctx = canvas.getContext('2d');
    resizeCanvas();
    setInterval(run, 33);
}

function getAliveNeighbours(x, y){

}


/*===================================*/
/*             Utilities             */
/*===================================*/

function drawSquare(x,y,color,size){
    ctx.fillStyle =color;
    ctx.fillRect(x,y,size,size);    
}

function resizeCanvas(e) {
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
