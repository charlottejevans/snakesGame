let board, context, foodX, foodY;

// board
 const blockSize = 25 // Size of each block on the board.
const rows = 20 // Number of rows on the board.
const cols = 20  // Number of columns on the board.


// snake head
let snakeX = blockSize * 5 // Tells the snake to start at the 5 x&y.
let snakeY = blockSize * 5

let velocityX = 0 // Velocity of the snake on the x axis.
let velocityY = 0 // Velocity of the snake on the y axis.

window.onload= function(){
    board = document.getElementById('board')
    board.height = rows * blockSize // changes the height of the board to 500.
    board.width = cols * blockSize
    context = board.getContext('2d') // Used for drawing on the board.

    placeFood()
    document.addEventListener("keyup", changeDirection)
    update()
    setInterval(update, 1000/10) // Calls the update function every 1000/10 milliseconds because the canvas needs to be updated every 1000/10 milliseconds for the snake to move.
}

function update() {
    context.fillStyle='black' // Changes the colour of the pen to black.
    context.fillRect(0,0,board.width,board.height)  // Starting from the corner of the board, filling a width and height of 500 and makes it black.

    context.fillStyle='red' // Changes the colour of the food.
    context.fillRect(foodX,foodY,blockSize,blockSize) // Draws the food at the x and y coordinates. Food coordinates, width and height of the canvas.

    if(snakeX === foodX && snakeY === foodY) { // If the snake eats the food, the food will be placed in a new location.
        placeFood()
    }

    context.fillStyle='lime' // Changes the colour of the snake.
    snakeX += velocityX * blockSize // Moves the snake on the x-axis. Moves by block size/square each time instead of 1 pixel.
    snakeY += velocityY *blockSize // Moves the snake on the y-axis.
    context.fillRect(snakeX,snakeY,blockSize,blockSize) // Draws the snake at the x and y coordinates. Snake coordinates, width and height of the canvas.
 }

function changeDirection(e) { // Changes the direction of the snake.
     if (e.code === "ArrowUp" && velocityY !== 1) {
         velocityX = 0
         velocityY = -1
     } else if (e.code === "ArrowDown" && velocityY !== -1) { // velocity =1 means that you cannot go the opposite direction to where you are going, otherwise you'd eat yourself.
            velocityX = 0
            velocityY = 1
        } else if (e.code === "ArrowLeft" && velocityX !== 1) {
            velocityX = -1
            velocityY = 0
        } else if (e.code === "ArrowRight" && velocityX !== -1) {
            velocityX = 1
            velocityY = 0
     }
}

function placeFood() {
     //  math.random returns a number between 0-1. Math.floor rounds the number down to the nearest whole number.
    foodX = Math.floor(Math.random() * cols) * blockSize // Randomly places the food on the board.
    foodY = Math.floor(Math.random() * rows) * blockSize
}