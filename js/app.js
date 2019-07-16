document.addEventListener('DOMContentLoaded', () => {



  //variables - some could be global ========================================
  const squares = []
  const width = 20
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
  const invadersPosition = [
    5,6,7,8,9,10,11,12,13,14,
    25,26,27,28,29,30,31,32,33,34

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
  const invaderId = setInterval(invaders, 300)

  if(squares[turretCurrentIndex].classList.contains('invader', 'turret')) {
    clearInterval(invaderId)
  }

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

  // fire bombs
  let bombId = null

  function fireBomb() {

    const randomIndex = Math.floor(Math.random() * invadersPosition.length)
    console.log(randomIndex)
    let bomberIndex = invadersPosition[randomIndex]
    console.log(bomberIndex)

    function moveBomb() {

      squares[bomberIndex].classList.remove('bomb')
      squares[bomberIndex+=width].classList.add('bomb')

      if(squares[bomberIndex].classList.contains('turret')) {
        squares[bomberIndex].classList.remove('bomb', 'turret')

        clearInterval(bombId)

      }
      if(bomberIndex < width) {
        clearInterval(bombId)
        squares[bomberIndex].classList.remove('bomb')
      }

    }
    bombId = setInterval(moveBomb, 300)
  }

const fireBombId = setInterval(fireBomb, 1000)

  //event listeners=============================================================

  document.addEventListener('keyup', fireMissile)
  document.addEventListener('keydown', moveTurret)

})
