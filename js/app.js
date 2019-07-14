document.addEventListener('DOMContentLoaded', () => {
//const squares contains the divs created by the squares push squares
  const squares = []
  const width = 6
  const grid = document.querySelector('.grid')
  let turretCurrentIndex = null

  //for use in loop to generate invader from position
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

  turretCurrentIndex = squares.length-1


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

  //add Invaders========================================

  const numberOfInvaders = 1
  const invadersPosition = []

  for (let i = 0; i < numberOfInvaders; i++) {
    squares[i].classList.add('invader')
    //need invaders position to feed into the below and update as they move
    invadersPosition.push(i)
    console.log(invadersPosition)
  }



  //single invador movement, need to get into a loop of some kind to loop through. ForEach on squares? If has class invader, remove then add to next

  // let invader3Id = null
  //
  // let invader3CurrentIndex = 2
  //
  // invader3Id = setInterval(moveInvader3, 1000)
  //
  // // move invaders down the grid=========================
  //
  // function moveInvader3() {
  //
  //   squares[invader3CurrentIndex].classList.remove('invader')
  //
  //   squares[invader3CurrentIndex+=1].classList.add('invader')
  //
  //   if(invader3CurrentIndex === (squares.length - (width+10))) {
  //     clearInterval(invader3Id)
  //
  //   }
  // }
  //
  // let invader2Id = null
  //
  // let invader2CurrentIndex = 1
  //
  // invader2Id = setInterval(moveInvader2, 1000)
  //
  // // move invaders down the grid=========================
  //
  // function moveInvader2() {
  //
  //   squares[invader2CurrentIndex].classList.remove('invader')
  //
  //   squares[invader2CurrentIndex+=1].classList.add('invader')
  //
  //   if(invader2CurrentIndex === (squares.length - (width+10))) {
  //     clearInterval(invader2Id)
  //
  //   }
  // }

  let invader1CurrentIndex = 0

  //move invader one div to the right every second================

  let invader1Id = null

  invader1Id = setInterval(moveInvader1, 1000)

  // move invaders down the grid=========================

  function moveInvader1() {

    squares[invader1CurrentIndex].classList.remove('invader')

    squares[invader1CurrentIndex+=1].classList.add('invader')

    if(invader1CurrentIndex === (squares.length - (width+10))) {
      clearInterval(invader1Id)

    }
  }



  //ALMOST....

  // let missileId = null
  //
  // missileId = setInterval(fireMissile, 500)
  //
  //
  // function fireMissile(e) {
  //   squares[missileCurrentIndex].classList.remove('missile')
  //   switch(e.keyCode) {
2  //     case 32:
  //       if(missileCurrentIndex - width >= 0) missileCurrentIndex -= width
  //       break
  //   }
  //   squares[missileCurrentIndex].classList.add('missile')
  // }


  // function fire missile ===================================================================
  //
  let missileCurrentIndex = []
  console.log(missileCurrentIndex)
  let missileId = null

  // missileId = setInterval(moveMissile, 500)
  //
  //
  //
  const turret = document.querySelector('.turret')
  console.log(turret)

  turret.addEventListener('click', moveMissile)

  function moveMissile() {

    squares[turretCurrentIndex].classList.remove('missile')

    squares[turretCurrentIndex-=width].classList.add('missile')
    missileCurrentIndex.push(turretCurrentIndex)

    if(missileCurrentIndex < 10) {
      clearInterval(missileId)
      squares[missileCurrentIndex].classList.remove('missile')
    }

  }




  // event listeners
  //
  document.addEventListener('keyup', moveTurret)


})
