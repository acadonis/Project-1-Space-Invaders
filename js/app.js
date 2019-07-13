document.addEventListener('DOMContentLoaded', () => {
//const squares contains the divs created by the squares push squares
  const squares = []
  const width = 6
  const grid = document.querySelector('.grid')
  let turretCurrentIndex = null
  const numberOfInvaders = 2
  //for use in loop to generate beer from position
  //
  //

  //timerIDs===============================================================



  // create grid ============================================================
  //loops round the number of times equalling size of grid 5 x 5
  for(let i = 0; i < width * width; i++) {
    //sets variable square to create the element div
    const square = document.createElement('div')

    //pushes the div to the array squares
    squares.push(square)
    //appends the div to the main html class grid
    grid.appendChild(square)
  }
  console.log(squares)
  turretCurrentIndex = squares.length-1

  //add lots of invaders

  for(let i = 0; i < numberOfInvaders; i++) {
    // let  = (starting array position)
    console.log('squares')
  }

  // add turret===================================================
  squares[squares.length-1].classList.add('turret')

  //move turret ==================================================

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

  // add invader - don't know if the below subtraction serves any purpose
  // some kind of loop to add the number of invaders in the const no. of invaders.eg. if i is less than 2 continue to add classes invader to the next +1 div in the class squares

  // squares[squares.length-(squares.length)].classList.add('invader')
  squares[0].classList.add('invader')
  console.log(squares.length-(squares.length))

  // let invaderCurrentIndex = squares.length-(squares.length)
  let invaderCurrentIndex = 0

  //move invader one div to the right every second================

  let invaderId = null

  invaderId = setInterval(moveInvader, 500)

  // move invader down the grid=========================

  function moveInvader() {

    squares[invaderCurrentIndex].classList.remove('invader')

    squares[invaderCurrentIndex+=1].classList.add('invader')

    if(invaderCurrentIndex === (squares.length - (width+10))) {
      clearInterval(invaderId)
      // } else if (true) {
      //   squares[invaderCurrentIndex+=1].classList.add('invader')
      //
      // } else if ((invaderCurrentIndex % width > width - 1)) {
      //   invaderCurrentIndex-=1


    }
  }

  // key trigger event to add clas phones with interval to move it up (-5 array places) when space hit, again some kind of array / loop as will be multiple

  //fire missile ===================================================================

  function fireMissile(e) {

    switch(e.keyCode) {
      case 32:
        squares[turretCurrentIndex-width].classList.add('missile')
        break
    }
  }



  document.addEventListener('keyup', fireMissile)

  document.addEventListener('keyup', moveTurret)

})
