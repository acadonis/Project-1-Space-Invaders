# GA Project 1: Space Invaders 

### Link

[Space Invaders](https://acadonis.github.io/space-invaders/)

### Installation

Fork the repository from github.

Open the index.html

Shoot some invaders! (refresh when you want a new game :wink:)

### Brief

I was tasked to create a a Space Invaders game, with the ability to clear a single wave of aliens and display a player's score at the end of the game as the MVP.

Additional suggested features included responsive design, increasing difficulty levels and a persistent leaderboard.

### Timeframe

7 days

### Overview & concept of the project

From the outset I wanted to ensure that the aliens presented a legitimate threat to the player, forcing them to constantly balance the risks of attack and defense. As such I wanted the code to allow for a fast paced game, with both the turret firing and aliens' bombs moving at speed and requiring good reactions on the part of the player.

### Technologies used

JavaScript ES6, HTML5, CSS3, SASS, Git, Github

### Approach taken

My first step was to produce a Trello board with high level tasks, to be broken down at a later stage once I had identified the specific problems involved with each. 

The game appeared to lend itself to a grid based layout, and this was the initial approach I took. Once this concept was validated, I focused on the turret and firing mechanics to establish these early on, as I felt this could create a number of blockers due to multiple intervals and potential "run off" from the grid.

The turret and laster mechanics did not prove as difficult as expected, which then let to the core mechanics of the alien block movement. This proved far more challenging then I had presumed; especially once collision and bomb dropping were added while trying to maintain the overall cohesion of the alien's position on the grid and relative to each other. A particular challenge was to ensure that destroyed aliens did not continue to drop bombs, which was solved with the following code:

    function fireBomb() {

    const notHit = []

    for(let i = 0;  i <= invadersPosition.length -1; i++){
      if(!hitArray.includes(i)) notHit.push(i)
    }

    const randomIndex = notHit[Math.floor(Math.random() * notHit.length)]

    let bombIndex = invadersPosition[randomIndex]

The overall solution to the movement mechanics of the aliens, using multiple arrays with relative positioning to the grid and applying / disapplying classes as appropriate, was arrived at after several other attempts using a single array and splicing elements from this. 

These other attempts led to a host of issues which required a rethink on the approach, and the deletion of significant amounts of code. While extremely frustrating at the time, this was a valuable lesson in not getting too attached to your code if it is not delivering the required functionality. . 

### Styling

My styling preferences lean strongly towards the simple application of strong bold, colours. With the 80s heritage of the original game, I chose to give the originally styling a twist with a neon theme and geometric imagery. The font used is [font], with a colour palette of [ colors linked in ]

### Snippets of your code and screenshots of your project

[Choose some code = turret firing mechanism]

[another bit of code]


![Space Invaders](./readme/spaceinvaders.gif)

### Wins and Blockers

#### Wins:
* An effective system for managing the alien block which maintains it's coherence and allows for all the required collision and firing mechanics. 

* The firing of multiple instances of the turret laser.

* A simple but striking design which pays homage to the original but has it's own personality. 

* A game which meets the MVP and my original requirement for a fast paced, reaction dependant experience.

#### Blockers:
* Currently only one bomb can be displayed on screen at any one time. This is despite the bomb drop code having the same underlying principles as turret firing, which can handle multiple instances of a turret laser on screen. 

* It seems probable that this is an interval issue which has crept in due to the different bomb firing mechanism (automatic firing on a per ms basis) versus a keypress for the turret.

* Keypress speed for the turret movement and firing also needs to be slowed, which has proven more challenging than anticipated.

* An early attempt to have a scalable grid, based on the width variable, was a red herring which consumed too much time when MVP had still not been met. 

* Destroying all the aliens or the turret being hit by a bomb does not fully stop the game code; this and a reset function to play again have proved challenging. 

### Future features

"Top n tail" the core game with:

* Start screen
* Reset button which is not a hard refresh
* High score table
* Game over screen

To achieve the above, a refactoring exercise on the existing code needs to be undertaken, especially pulling out nested functions and ensuring these are only being called when required. 

### Learning points (tech & soft skills)

#### Methodology
The importance of reaching MVP, and testing MVP thoroughly at that point to make sure the principles behind the code work  before proceeding to more complex elements was my principal learning point from this project. 

Having spent several days development more advanced features without reaching MVP, when I hit blockers on MVP elements this was complicated by having complex code already written in other areas. 

I also was reminded of the importance of building code one step at a time, and not trying to make large jumps before testing. If you cannot see a way of incrementally adding features in a controlled manner rather than writing everything at one, your code is probably not as optimised as it could be.

In line with this, my Trello board usage was not as disciplined as it could have been, and having a clear picture of what tasks were outstanding and their importance would have been a clear benefit, and is something I have implemented subequent to this project. 

#### Technical
The project developed my technical skills in every area of the technologies used. In Javascript, I became more comfortable with the use of arrays, functions and structuring variables to avoid scoping issues. Avoiding coding "soup" and functions become too unwieldy was also something I was mindful of, with a degree of success.

The use of SASS for the CSS styling increased my knowledge of this useful tool, and practice with flexbox in CSS meant the layout of the game was a relativey straightforward. 








