# The Front End Nanodegree Arcade Game
This is the fourth project in Google Udacity FEND Nanodegree Scholarship.

## Author
Made by Mariola Karpiewska based on initial code provided by the Udacity.

## Execution
Unzip the folders and run index.html.

## Play Rules
The player has to safely reach the water on top of the screen and then go back down to the grass. Warning! Any collision with running ladybird makes a lot of mess and inevitably resets the game!


## Code Description
The player and ladybirds are coded as separate objects: Player and Enemy, accordingly.
There is one instance of Player object and NUM_OF_ENEMIES instances of Enemy object.
Following methods of Player and Enemy are executed by Engine's **main()** function in loop during the game:
- **update()** - makes time based adjustments to position of the object (enemies run, collided objects get dizzy, etc.)
- **render()** - draws the object

The Player object also handles user input with **handleInput()** method in order to adjust position of the player according to user requests.
Most of the initial variable assignments have been moved from objects' constructor to its **init()** method, because the init() is called after the game resources are loaded. It may help in case some variables depend on file attributes (e.g. width, height). However, at the moment there is no such a case. It was considered during the development and remains an option for the future.

The Engine's main() function runs repetitively and calls **update()**, **render()** and **updateGameEngine()** at each "tick":
- **update()** - calls update() functions of all game entities and detects possible collisions by calling checkCollisions()
- **render()** - calls render() function of all entities
- **updateGameState()** - modifies game's behavior depending on the player condition (continues play, has collided, has won) and eventually resets the game if necessary.

## Dependencies
The app does not use any external libraries.

## Contributing
Pull requests are not expected, but may be accepted if they occur ;-)

## Useful links
- [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for the project.
- [Detailed instructions](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true) on how to get started.
