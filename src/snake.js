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

let snakeBody = [] // Array to store segments x/y coordinates.

let gameOver = false

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
     if (gameOver) {
        return }

    context.fillStyle='black' // Changes the colour of the pen to black.
    context.fillRect(0,0,board.width,board.height)  // Starting from the corner of the board, filling a width and height of 500 and makes it black.

    context.fillStyle='red' // Changes the colour of the food.
    context.fillRect(foodX,foodY,blockSize,blockSize) // Draws the food at the x and y coordinates. Food coordinates, width and height of the canvas.

    if(snakeX === foodX && snakeY === foodY) { // If the snake eats the food, the food will be placed in a new location.
        snakeBody.push([foodX, foodY]) // grows the segment where the food was. Adds a new segment to the snake.
        placeFood()
    }

    for (let i = snakeBody.length - 1; i > 0; i--) { // Loops through the snake body array.
        snakeBody[i] = snakeBody[i-1] // Moves the snake body segments with the snake head.
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY] // Moves the snake head. 0 = 1 before the head of the snake.
    }

    // Snake
    context.fillStyle='lime' // Changes the colour of the snake.
    snakeX += velocityX * blockSize // Moves the snake on the x-axis. Moves by block size/square each time instead of 1 pixel.
    snakeY += velocityY *blockSize // Moves the snake on the y-axis.
    context.fillRect(snakeX,snakeY,blockSize,blockSize) // Draws the snake at the x and y coordinates. Snake coordinates, width and height of the canvas.
    for (let i = 0; i < snakeBody.length; i++) { // Loops through the snake body array.
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize) // Draws the snake body at the x and y coordinates. Snake body coordinates, width and height of the canvas.
    }

    // Game over conditions
    if (snakeX < 0 || snakeX > cols* blockSize || snakeY < 0 || snakeY > rows * blockSize) { // If the snake goes out of bounds, the game is over.
        gameOver = true
        alert("Game Over. Press F5 to play again.")
    }

    for (let i = 0 ; i < snakeBody.length; i++) { // Loops through the snake body array.
        if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) { // If the snake head collides with the snake body, the game is over.
            gameOver = true
            alert("Game Over. Press F5 to play again.")
        }
    }
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