

document.addEventListener('DOMContentLoaded', () => {

  //variables - some could be global ========================================
  const squares = []
  const width = 10
  const grid = document.querySelector('.grid')
  let turretCurrentIndex = null
  const scoreBoard = document.querySelector('.score')
  let score = 0
  const hitArray = []


  // create grid ============================================================
  for(let i = 0; i < width * width; i++) {
    //sets variable square to create the element div
    const square = document.createElement('div')
    //pushes the div to the array squares
    squares.push(square)
    //appends the div to the main html class grid
    grid.appendChild(square)
  }

  turretCurrentIndex = squares.length-(width+1)


  //start game function



  // add turret==============================================================

  squares[squares.length-(width+1)].classList.add('turret')

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
    2,3,4,5,6,7,
    12,13,14,15,16,17
  ]

  for (let i = 0; i <= invadersPosition.length - 1; i++) {
    squares[invadersPosition[i]].classList.add('invader')
  }

  let direction = 1

  function invaders() {

    for (let i = 0; i <= invadersPosition.length - 1; i++) {
      squares[invadersPosition[i]].classList.remove('invader')
    }

    for (let i = 0; i <= invadersPosition.length - 1; i++) {
      invadersPosition[i] += direction
    }

    for (let i = 0; i <= invadersPosition.length - 1; i++) {
      if (hitArray.includes(i)){
        //nothing
      } else
        squares[invadersPosition[i]].classList.add('invader')

    }

    const leftEdge = invadersPosition[0] % width === 0
    const rightEdge = invadersPosition[invadersPosition.length - 1] % width === width - 1

    if((leftEdge && direction === -1) || (rightEdge && direction === 1)){
      direction = width
    }else if (direction === width) {
      if (leftEdge) direction = 1
      else direction = -1
    }

    if(squares[turretCurrentIndex].classList.contains('invader', 'turret')) {
      clearInterval(invaderId)
      squares[turretCurrentIndex].classList.add('turretExplosion')
      setTimeout(() => squares[turretCurrentIndex].classList.remove('turretExplosion'), 250)

    }

    for (let i = 0; i <= invadersPosition.length - 1; i++){
      if(invadersPosition[i] > (squares.length - (width -1))){
        clearInterval(invaderId)
      }
    }
  }

  const invaderId = setInterval(invaders, 1000)



//FIRE MISSILE AND COLLISION
  function fireMissile(e) {
    let missileId = null
    let missileCurrentIndex = turretCurrentIndex
    function moveMissile() {

      squares[missileCurrentIndex].classList.remove('missile')

      squares[missileCurrentIndex-=width].classList.add('missile')

      if(squares[missileCurrentIndex].classList.contains('invader')) {
        squares[missileCurrentIndex].classList.remove('invader', 'missile')

        squares[missileCurrentIndex].classList.add('explosion')
        setTimeout(() => squares[missileCurrentIndex].classList.remove('explosion'), 250)

        clearInterval(missileId)

        const hit = invadersPosition.indexOf(missileCurrentIndex)
        hitArray.push(hit)

        score++
        scoreBoard.textContent = score
      }

      if(missileCurrentIndex < width) {
        clearInterval(missileId)
        setTimeout(() => squares[missileCurrentIndex].classList.remove('missile'), 100)
      }



    }
    switch(e.keyCode) {
      case 32:
        missileId = setInterval(moveMissile, 100)
        break
    }
  }



  //fire bombs
  let bombId = null

  function fireBomb() {

    const notHit = []

    for(let i = 0;  i <= invadersPosition.length -1; i++){
      if(!hitArray.includes(i))
        notHit.push(i)

    }
    // const randomIndex = Math.floor(Math.random() * invadersPosition.length)
    //which does not equal an element in array hitArray

    console.log(notHit)

    const randomIndex = notHit[Math.floor(Math.random() * notHit.length)]
    console.log(randomIndex)


    let bombIndex = invadersPosition[randomIndex]


    function moveBomb() {



      squares[bombIndex].classList.remove('bomb')



      squares[bombIndex+=width].classList.add('bomb')


      if(squares[bombIndex].classList.contains('turret')) {
        squares[bombIndex].classList.remove('bomb', 'turret')

        squares[bombIndex].classList.add('turretExplosion')
        setTimeout(() => squares[bombIndex].classList.remove('turretExplosion'), 250)

        clearInterval(bombId)
        // clearInterval(fireBombId)
        stop()
      }
      if(bombIndex > (squares.length - (width + 1))) {
        clearInterval(bombId)
        // clearInterval(fireBombId)
        squares[bombIndex].classList.remove('bomb')
      }

    }
    bombId = setInterval(moveBomb, 100)
  }

const fireBombId = setInterval(fireBomb, 1000)

// function stop game

  function stop(){
    clearInterval(fireBombId)
    clearInterval(invaderId)

    function endScreen(){
      //game over screen
    }

}



  //event listeners=============================================================

  document.addEventListener('keyup', fireMissile)
  document.addEventListener('keydown', moveTurret)

})
