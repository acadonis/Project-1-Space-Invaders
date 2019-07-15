document.addEventListener('DOMContentLoaded', () => {
//const squares contains the divs created by the squares push squares
  const squares = []
  const width = 7
  const grid = document.querySelector('.grid')
  let turretCurrentIndex = null
  const scoreBoard = document.querySelector('.score')
  let score = 0

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

  const numberOfInvaders = 10
  const invadersPosition = []

  for (let i = 0; i < numberOfInvaders; i++) {
    invadersPosition.push(i)
    squares[i].classList.add('invader')

    console.log(invadersPosition)
  }


  //move invader one div to the right every second================



  // move invaders down the grid=========================


  // const numberOfInvaders = 10
  // const invadersPosition = []
  // for (let i = 0; i < numberOfInvaders; i++) {
  //   invadersPosition.push(i)
  //   squares[invadersPosition[i]].classList.add('invader')
  // }
  //
  // console.log(invadersPosition)

  //for each square with class invader, remove that class, then


  // invadersPosition.forEach(arrayItem => {
  //   const arrayPosition = arrayItem.index
  // // })
  // //
  //
  // function moveInvader1() {
  //
  //   squares[invader1CurrentIndex].classList.remove('invader')
  //
  //   squares[invader1CurrentIndex+=1].classList.add('invader')
  //
  //   if(invader1CurrentIndex === (squares.length - (width))) {
  //     clearInterval(invader1Id)
  //
  //   }
  // }


  //
  // invaderId = setInterval(invaders, 1000)
  //
  // function invaders() {}


  //MIKES SOLUTION

  //   const invadersPosition = [values]
  //
  //   for (let i= 0; i.invadersPosition.length; i++) {
  //     squares[invaderPosition[i]].classList.remove('invader')
  //     invaderPosition[i]+=1
  //     squares[invaderPositions[i]].classList.add('invader')
  //   }
  // //



  // let invaderId = null



  //REMINDER invadersPosition = [0, 1, 2, 3, 4, 5, ....]

  // function moveInvader() {
  //
  //   squares[invadersPosition].classList.remove('invader')
  //   squares[invadersPosition+=1].classList.add('invader')
  //
  //   if(invadersPosition < width) {
  //     clearInterval(invaderId)
  //     squares[invadersPosition].classList.remove('invader')
  //   }
  // }

  // let invaderId = null
  //
  //
  // (function(moveInvader) {
  //   squares[invadersPosition].classList.remove('invader')
  //   squares[invadersPosition+=1].classList.add('invader')
  // })
  //
  // invaderId = setInterval(moveInvader, 1000)




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

  // let invader1CurrentIndex = 0
  //
  // //move invader one div to the right every second================
  //
  // let invader1Id = null
  //
  // invader1Id = setInterval(moveInvader1, 1000)
  //
  // // move invaders down the grid=========================
  //
  // function moveInvader1() {
  //
  //   squares[invader1CurrentIndex].classList.remove('invader')
  //
  //   squares[invader1CurrentIndex+=1].classList.add('invader')
  //
  //   if(invader1CurrentIndex === (squares.length - (width))) {
  //     clearInterval(invader1Id)
  //
  //   }
  // }
  //



  // function fire missile ===================================================================

  // function fireMissile(e) {
  //
  //   switch(e.keyCode) {
  //     case 32:
  //       squares[turretCurrentIndex-width].classList.add('missile')
  //
  //       break
  //   }
  // }
  //
  //
  //
  // document.addEventListener('keyup', fireMissile)


  // function to move missile =============================


  //
  // let missileId = null
  //
  // missileId = setInterval(moveMissile, 500)
  //
  // let missileCurrentIndex = turretCurrentIndex
  //
  // function moveMissile() {
  // //
  //   squares[missileCurrentIndex].classList.remove('missile')
  //   squares[missileCurrentIndex-=width].classList.add('missile')
  //
  //
  //   if(missileCurrentIndex < 10) {
  //     clearInterval(missileId)
  //     squares[missileCurrentIndex].classList.remove('missile')
  //   }
  //
  // }

  //fire missile and move missile jammed together and working.

  //WORKING!!!!
  function fireMissile(e) {
    let missileId = null
    let missileCurrentIndex = turretCurrentIndex
    function moveMissile() {

      squares[missileCurrentIndex].classList.remove('missile')
      squares[missileCurrentIndex-=width].classList.add('missile')

      if(squares[missileCurrentIndex].classList.contains('invader')) {
        squares[missileCurrentIndex].classList.remove('invader', 'missile')
        // clearInterval(invader1Id)
        clearInterval(missileId)
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
        moveMissile()
        break
    }
  }



  // //WORKING!!!!
  // function fireMissile(e) {
  //   let missileId = null
  //   let missileCurrentIndex = turretCurrentIndex
  //
  //   function moveMissile() {
  //
  //     squares[missileCurrentIndex].classList.remove('missile')
  //     squares[missileCurrentIndex-=width].classList.add('missile')
  //
  //     if(missileCurrentIndex < width) {
  //       clearInterval(missileId)
  //       squares[missileCurrentIndex].classList.remove('missile')
  //     }
  //
  //   }
  //   switch(e.keyCode) {
  //     case 32:
  //       missileId = setInterval(moveMissile, 100)
  //       moveMissile()
  //       break
  //   }
  // }2






  document.addEventListener('keyup', fireMissile)
  document.addEventListener('keyup', moveTurret)
  // document.addEventListener('keyup', moveInvaders)

})
//THIS SHOULD WORK
//use direction to move them about
// let direction = 1
//   //function moveInvaders() {
// for(let i= 0; i < invaders.length; i++){
//   squares[invader[i]].classList.remove('invader')
//   invaders[i] += direction
//   squares[invader[i]].class.add('invader')
//   }
