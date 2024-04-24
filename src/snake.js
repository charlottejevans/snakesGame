let board, context, foodX, foodY;

// board
 const blockSize = 25 // Size of each block on the board.
const rows = 20 // Number of rows on the board.
const cols = 20  // Number of columns on the board.


// snake head
let snakeX = blockSize * 5 // Tells the snake to start at the 5 x&y.
let snakeY = blockSize * 5


window.onload= function(){
    board = document.getElementById('board')
    board.height = rows * blockSize // changes the height of the board to 500.
    board.width = cols * blockSize
    context = board.getContext('2d') // Used for drawing on the board.

    placeFood()
    update()
}

function update() {
    context.fillStyle='black' // Changes the colour of the pen to black.
    context.fillRect(0,0,board.width,board.height)  // Starting from the corner of the board, filling a width and height of 500 and makes it black.

    context.fillStyle='lime' // Changes the colour of the snake.
    context.fillRect(snakeX,snakeY,blockSize,blockSize) // Draws the snake at the x and y coordinates. Snake coordinates, width and height of the canvas.

    context.fillStyle='red' // Changes the colour of the food.
    context.fillRect(foodX,foodY,blockSize,blockSize) // Draws the food at the x and y coordinates. Food coordinates, width and height of the canvas.
}

function placeFood() {
     //  math.random returns a number between 0-1. Math.floor rounds the number down to the nearest whole number.
    foodX = Math.floor(Math.random() * cols) * blockSize // Randomly places the food on the board.
    foodY = Math.floor(Math.random() * rows) * blockSize
}