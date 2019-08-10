GA Project 1: Space Invaders 

Link on GitHub Pages 

https://acadonis.github.io/space-invaders/

Brief

I was taske to create a a Space Invaders game, with the ability to clear a single wave of aliens and display a player's score at the end of the game as the MVP.

Additional suggested features included responsive design, increasing difficulty levels and a persistent leaderboard.

Overview & concept of the project

My overall approach was to try and remain faithful to the original's balance of risk between destroying aliens and avoiding their bombs. As such from the outset I wanted to ensure that the aliens presented a legitimate threat to the player, forcing them to make balance the risks of attack versus defense.

Technologies used

HTML5, CSS 3, ES6, SASS, Git, Github

○ Approach taken - Thought process & methods of producing it

The game appeared to lend itself to a grid based layout, and this was the initial approach I took. Once this concept was validated, I focused on the turret and firing mechanics to establish these early on, as I felt this could create a number of blockers due to multiple intervals and potential "run off" from the grid.

This did not prove as difficult as expected, which then let to the core mechanics of the alien block movement. This proved far more challenging then I had presumed; especially once collision and bomb dropping were added while trying to maintain the overall cohesion of the alien's position on the grid and relative to each other. A particular challenge was to ensure that destroyed aliens did not continue to drop bombs, which I solved with the following code:

The overall solution to the movement mechanics of the aliens, using multiple arrays with relative positioning to the grid and applying / disapplying classes as appropriate, was arrived at after several other attempts using a single array and splicing elements from this. 

The latter solution led to a host of issues which required a rethink on the approach, and the deletion of significant amounts of code. While extremely frustrating at the time, this was a valuable lesson in not getting too attached to your code if it is not delivering the required functionality. . 

○ Snippets of your code and screenshots of your project



○ Wins and Blockers

Wins:
An effective system for managing the alien block which maintains it's coherence and allows for all the required collision and firing mechanics. 

The firing of multiple instances of the turret laser.

A simple but striking design which pays homage to the original but has it's own personality. 

Blockers:
Currently only one bomb can be displayed on screen at any one time. This is despite having the same underlying principles behind the code as turret firing, which can handle multiple instances of a turret laser on screen

It seems probable that this is an interval issue which has crept in due to the different bomb firing mechanism (automatic firing on a per ms basis) versus a keypress for the turret.

Keypress speed for the turret movement and firing also needs to be slowed, which has proven more challenging than anticipated.

An early attempt to have a scalable grid, based on the width variable, was a red herring which consumed too much time when MVP had still not been met. 

○ Future features

"Top n tail" the core game with:
Start screen
Reset button which is not a hard refresh
High score table
Game over screen

To achieve the above, a refactoring exercise on the existing code needs to be undertaken, especially pulling out nested functions and ensuring these are only being called when required. 


○ What you have learned (tech & soft skills)
Increased comfort with using arrays and functions, positioning of variables


The importance of reaching MVP, and testing MVP thoroughly at that point to make sure the principles behind the code work  before proceeding to more complex elements of the project. 



