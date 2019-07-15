document.addEventListener('DOMContentLoaded', () => {
//const squares contains the divs created by the squares push squares
  const squares = []
  const width = 20
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

  const numberOfInvaders = 15
  const invadersPosition = []

  for (let i = 0; i < numberOfInvaders; i++) {
    squares[i+2].classList.add('invader')
    invadersPosition.push(i+2)
    // // console.log(invadersPosition[5])

  }

  //IMPORTANT!!!! need to -1 from length of array otherwise it tries to target position one after end of array (e.g. 20 instead of 19 and fucks up)




  // function moveInvader(){
  //
  //   for (let i= 0; i <= invadersPosition.length - 1; i++) {
  //     squares[invadersPosition[i]].classList.remove('invader')
  //     invadersPosition[i]+=1
  //     squares[invadersPosition[i]].classList.add('invader')
  //   }
  // }
  //
  // setInterval(moveInvader, 1000)

  //
  // function invaders() {
  //   for (let i= 0; i <= invadersPosition.length - 1; i++) {
  //     squares[invadersPosition[i]].classList.remove('invader')
  //     invadersPosition[i]+=1
  //     squares[invadersPosition[i]].classList.add('invader')
  //   }
  // }
  //
  // let invaderId = null
  //
  // invaderId = setInterval(invaders, 1000)

  function invaders() {
    for (let i = 0; i <= invadersPosition.length - 1; i++) {
      squares[invadersPosition[i]].classList.remove('invader')
      invadersPosition[i]+=1
    }
    for (let i = 0; i <= invadersPosition.length - 1; i++) {
      squares[invadersPosition[i]].classList.add('invader')
    }
  }

  let invaderId = setInterval(invaders, 1000)










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




  //WORKING!!!!
  function fireMissile(e) {
    let missileId = null
    let missileCurrentIndex = turretCurrentIndex
    function moveMissile() {

      squares[missileCurrentIndex].classList.remove('missile')
      squares[missileCurrentIndex-=width].classList.add('missile')

      if(squares[missileCurrentIndex].classList.contains('invader')) {
        squares[missileCurrentIndex].classList.remove('invader', 'missile')
        //need to remove from invader array here as well
        // clearInterval(invader1Id)
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

  //if(e.key === 'ArrowUp') {}

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
