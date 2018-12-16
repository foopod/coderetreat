var isAlive = function(isAliveCurrently, numberOfAliveNeighbours) {
    return !(numberOfAliveNeighbours < 2 || numberOfAliveNeighbours > 3)
}

var getAliveNeighbours = function(neighbourGrid){
    return 0;
}

module.exports = {
    isAlive: function(isAliveCurrently, numberOfAliveNeighbours) {
        return !(numberOfAliveNeighbours < 2 || numberOfAliveNeighbours > 3)
    },
    
    getAliveNeighbours: function(neighbourGrid) {
        count=0;
        for(i = 0; i< 3; i++) {
            for (j = 0; j<3; j++) {
                if (!(i == 1 && j == 1)) { 
                if (neighbourGrid[i][j]) count++;
                }
            }
        }
        return count;
    }
}