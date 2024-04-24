
// board
 var blockSize = 25
var rows = 20
var cols = 20
var board, context;

window.onload= function(){
    board = document.getElementById('board')
    board.height = rows * blockSize
    board.width = cols * blockSize
    context = board.getContext('2d') // Used for drawing on the board.

    update()
}

function update() {
    context.fillStyle='black' // Changes the colour of the pen to black.
    context.fillRect(0,0,board.width,board.height)  // Starting from the corner of the board, filling a width and height of 500 and makes it black.
}