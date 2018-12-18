module.exports = {
    isAlive: function(currentState, numberOfNeighbours) {
        return !((numberOfNeighbours > 3 || numberOfNeighbours < 2) || (!currentState && numberOfNeighbours != 3));
    },
    countNeighbours: function(seed){
        var count = 0;
        for(var x = 0; x < seed.length; x++){
            for(var y = 0; y < seed[x].length; y++){
                if(!(y ===1 && x ===1) && seed[x][y]){
                    count++;
                }
            }
        }
        return count;
    },
    getSubGrid: function(x, y, grid){
      return [[false,false,false], [false,false,false], [false,false,false]];
    }
}