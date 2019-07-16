document.addEventListener('DOMContentLoaded', () => {



  //variables - some could be global ========================================
  const squares = []
  const width = 10
  const grid = document.querySelector('.grid')
  let turretCurrentIndex = null
  const scoreBoard = document.querySelector('.score')
  let score = 0



  //timerIDs=================================================================



  // create grid ============================================================
  for(let i = 0; i < width * width; i++) {
    //sets variable square to create the element div
    const square = document.createElement('div')
    //pushes the div to the array squares
    squares.push(square)
    //appends the div to the main html class grid
    grid.appendChild(square)
  }

  turretCurrentIndex = squares.length-1


  // add turret==============================================================

  squares[squares.length-1].classList.add('turret')

  //move turret =============================================================

  function moveTurret(e) {

    squares[turretCurrentIndex].classList.remove('turret')

    switch(e.keyCode) {
      case 37:
        if(turretCurrentIndex % width !== 0) turretCurrentIndex -= 1
        break

      case 39:
        if(turretCurrentIndex % width < width - 1) turretCurrentIndex += 1
        break
    }
    squares[turretCurrentIndex].classList.add('turret')
  }

  //add invaders=================================================

  const numberOfInvaders = 8
  const invadersPosition = [
    0, 1, 2, 3, 4, 5, 6,
    10,11,12,13,14,15,16,
    20,21,22,23,24,25,26
  ]

  //setting direction of

  let direction = 1

  function invaders() {

    for (let i = 0; i <= invadersPosition.length - 1; i++) {
      squares[invadersPosition[i]].classList.remove('invader')
    }

    for (let i = 0; i <= invadersPosition.length - 1; i++) {
      invadersPosition[i] += direction

    }

    for (let i = 0; i <= invadersPosition.length - 1; i++) {
      squares[invadersPosition[i]].classList.add('invader')
    }

    const rightSide = invadersPosition[invadersPosition.length - 1] % width === width - 1
    const leftSide = invadersPosition[0] % width === 0

    if((rightSide && direction === 1) || (leftSide && direction === -1)){
      direction = width
    } else if (direction === width) {
      if (leftSide) direction = 1
      else direction = -1
    }

  }


  //need to stop at some point
  let invaderId = setInterval(invaders, 300)

//FIRE MISSILE AND COLLISION
  function fireMissile(e) {
    let missileId = null
    let missileCurrentIndex = turretCurrentIndex
    function moveMissile() {

      squares[missileCurrentIndex].classList.remove('missile')
      squares[missileCurrentIndex-=width].classList.add('missile')

      if(squares[missileCurrentIndex].classList.contains('invader')) {
        squares[missileCurrentIndex].classList.remove('invader', 'missile')

        clearInterval(missileId)

        const hit = invadersPosition.indexOf(missileCurrentIndex)

        invadersPosition.splice(hit,1)

        score++
        scoreBoard.textContent = score
      }

      if(missileCurrentIndex < width) {
        clearInterval(missileId)
        squares[missileCurrentIndex].classList.remove('missile')
      }

    }
    switch(e.keyCode) {
      case 32:
        missileId = setInterval(moveMissile, 100)
        break
    }
  }

  //event listeners=============================================================

  document.addEventListener('keyup', fireMissile)
  document.addEventListener('keydown', moveTurret)

})
