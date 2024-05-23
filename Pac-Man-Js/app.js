document.addEventListener('DOMContentLoaded', () => {

    const scoreDisplay = document.getElementById('score')
    const width = 28 // 28 layout numbers on width and 28 on height = 784 numbers in layout[]
    let score = 0
    const grid = document.querySelector('.grid')
    const layout = [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty
  
    const squares = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
  
        //add layout to the board
        if(layout[i] === 0) {
          squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
          squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
          squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
          squares[i].classList.add('power-pellet')
        }
      }
    }
    createBoard()

// Start position for pac-man

let pacmanCurrentIndex= 490;

squares[pacmanCurrentIndex].classList.add('pac-man');

// move pac-man
function movePacman(e){
    squares[pacmanCurrentIndex].classList.remove('pac-man') // remove pac-man from array

     switch(e.keyCode){
         case 37: // left arrow key
             if(pacmanCurrentIndex % width !==0  // to go left, the index we move to must always be inferior to the one we are now, so the remainder will be > 0 
             // except at the grid limit, where the remainder will be 0 (28%28, 56%28 etc)
                && !squares[pacmanCurrentIndex-1].classList.contains('wall') 
                && !squares[pacmanCurrentIndex-1].classList.contains('ghost-lair')) 
                pacmanCurrentIndex -= 1// if this condition is met, you can move left

                // check for map's left exit
                if((pacmanCurrentIndex -1) === 363){
                    pacmanCurrentIndex = 391
                }
             break
         case 38: // up
             if(pacmanCurrentIndex - width >= 0 // to go up we must go back 28 indexes, hence - width
                && !squares[pacmanCurrentIndex-width].classList.contains('wall')
                && !squares[pacmanCurrentIndex-width].classList.contains('ghost-lair')) 
                pacmanCurrentIndex -= width
             break
         case 39: // right
             if(pacmanCurrentIndex % width < width - 1  // Same logic as left movement, ex 27%28 (at the right grid limit) = 27, 
             // which is = 28-1 (27) so we wont be able to move right( index starts at 0, end of grid is at 27)
                && !squares[pacmanCurrentIndex+1].classList.contains('wall')
                && !squares[pacmanCurrentIndex+1].classList.contains('ghost-lair')) 
                pacmanCurrentIndex += 1

                // check for map's left exit
                if((pacmanCurrentIndex + 1) === 391){
                    pacmanCurrentIndex = 364
                }
             break
         case 40:  // down ,to go up we must go forth 28 indexes, 
             if(pacmanCurrentIndex + width < width * width // last index where we can move down is 756( 784 is the last index)
             // 756 + 28 = 784 which no longer holds true so we cant move down
                && !squares[pacmanCurrentIndex+width].classList.contains('wall')
                && !squares[pacmanCurrentIndex+width].classList.contains('ghost-lair')) 
                pacmanCurrentIndex += width;
     }      

     squares[pacmanCurrentIndex].classList.add('pac-man') // Add new pac man to array in updated index
     pacDotEaten()
     powerPelletEaten()
     checkForGameOver()
     checkForWin()
}

document.addEventListener('keyup', movePacman) // run movePacman() when key is released (keyup)

// Function to update score

function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
      score++
      scoreDisplay.innerHTML = score
      squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
  }

 // Power Pellets 
 function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
      score +=10
      ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(unScareGhosts, 10000)
      squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
  }

  //make the ghosts stop flashing
  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }
// ghosts
  //create ghosts 
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
    }
  }


  ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
    ]

  //draw ghosts onto the grid
  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    })

    // move the ghosts
    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(ghost) {
      const directions =  [-1, +1, width, -width] // left. rigth. up and down
      let direction = directions[Math.floor(Math.random() * directions.length)]
  
      ghost.timerId = setInterval(function() {
        //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
        if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
          !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
            //remove the ghosts classes
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
            //move into that space
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        //else find a new random direction ot go in
        } else direction = directions[Math.floor(Math.random() * directions.length)]
  
        //if the ghost is currently scared
        if (ghost.isScared) {
          squares[ghost.currentIndex].classList.add('scared-ghost')
        }
  
        //if the ghost is currently scared and pacman is on it
        if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
          squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
          ghost.currentIndex = ghost.startIndex
          score +=100
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
      checkForGameOver()
      }, ghost.speed)
    }
      //check for a game over
  function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function(){ alert("Game Over"); }, 500)
    }
  }

  //check for a win - more is when this score is reached
  function checkForWin() {
    if (score === 274) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function(){ alert("You have WON!"); }, 500)
    }
  }

  
})
