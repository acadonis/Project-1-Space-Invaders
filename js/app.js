document.addEventListener('DOMContentLoaded', () => {

  let squares = []
  let width = 10
  let grid = document.querySelector('.grid')
  let turretCurrentIndex = null
  let scoreBoard = document.querySelector('.score')
  let score = 0
  let hitArray = []
  let resetButton = document.querySelector('.reset')


  //start game function=========================================
  function game(){

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

    // add turret==============================================================

    squares[squares.length-(width+1)].classList.add('turret')

    //move turret =============================================================

    function moveTurret(e) {

      squares[turretCurrentIndex].classList.remove('turret')

      switch(e.keyCode) {
        case 37:
          if(turretCurrentIndex % width !== 0) {
            console.log(turretCurrentIndex)
            turretCurrentIndex -= 1

          }

          break

        case 39:
          if(turretCurrentIndex % width < width - 1) turretCurrentIndex += 1

          break
      }
      squares[turretCurrentIndex].classList.add('turret')
    }

    //add invaders=================================================
    const invadersPosition = [
      2, 3, 4, 5, 6, 7,
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

      if(hitArray.length === invadersPosition.length){
        stop()
      }

    }

    const invaderId = setInterval(invaders, 1000)

    //FIRE MISSILE AND COLLISION ====================================
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
    //to something wrong with randomIndex generation with more than one bomb on screen
    //fire bombs ===========================================
    let bombId = null

    function fireBomb() {

      const notHit = []

      for(let i = 0;  i <= invadersPosition.length -1; i++){
        if(!hitArray.includes(i))
          notHit.push(i)
      }

      const randomIndex = notHit[Math.floor(Math.random() * notHit.length)]

      let bombIndex = invadersPosition[randomIndex]


      function moveBomb() {

        squares[bombIndex].classList.remove('bomb')

        squares[bombIndex+=width]

        if(squares[bombIndex].classList.contains('invader')){
          //do nothing
        }else {
          squares[bombIndex].classList.add('bomb')
        }


        if(squares[bombIndex].classList.contains('turret')) {

          squares[bombIndex].classList.remove('bomb', 'turret')

          squares[bombIndex].classList.add('turretExplosionBot')
          //
          // setTimeout(() => squares[bombIndex].classList.remove('turretExplosionBot'), 250)

          squares[bombIndex-width].classList.add('turretExplosionTop')

          // setTimeout(() => squares[bombIndex-width].classList.remove('turretExplosionTop'), 250)

          clearInterval(bombId)
          stop()
        }
        if(bombIndex > (squares.length - (width + 1))) {
          clearInterval(bombId)
          clearInterval(fireBomb)
          squares[bombIndex].classList.remove('bomb')
        }

      }
      bombId = setInterval(moveBomb, 100)
    }

    const fireBombId = setInterval(fireBomb, 1000)

    // function stop game ======================================

    function stop(){
      clearInterval(bombId)
      clearInterval(fireBombId)
      clearInterval(invaderId)
    //   alert('Game over')
    //   getConfirmation()
      // function endScreen(){
      //   //game over screen
    }

    // play again prompt function

    //   function getConfirmation(){
    //     var retVal = confirm('Do you want to play again?')
    //
    //
    //     function deleteDivs(){
    //       var el = document.querySelector('.grid')
    //       while (el.firstChild) el.removeChild(el.firstChild)
    //     }
    //
    //     if(retVal){
    //
    //       deleteDivs()
    //       squares = []
    //       width = 10
    //       turretCurrentIndex = null
    //       score = 0
    //       hitArray = []
    //       scoreBoard = document.querySelector('.score')
    //       grid = document.querySelector('.grid')
    //       resetButton = document.querySelector('.reset')
    //       game()
    //     }else {
    //       //return to main menu
    //       return false
    //     }
    //   }
    //
    // }

    // let
    // let turretCurrentIndex = null

    // let score = 0
    // let hitArray = []
    // let


    // listeners===============================================

    document.addEventListener('keyup', fireMissile)

    document.addEventListener('keydown', moveTurret)

    //end of game function
    //BREAK DOWN GAME FUNCTION!!!!

  }
  game()

})
