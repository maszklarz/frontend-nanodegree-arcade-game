const maxX = 500;
const maxY = 500;

// Enemies our player must avoid
// This constructor is executed before resources are loaded,
// so some initialization is moved to init(), which is executed
// after resource loading.
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //this.init();  // first init to be executed by engine,
                    // when Resources are already loaded
};

// The init() is executed after resources are loaded
// in case some of the assignments depend on image attributes etc.
Enemy.prototype.init = function() {
  this.shiftX = 1; // measured in image editor
  this.shiftY = 77; // measured in image editor
  this.width = 98; // measured in image editor
  this.height = 66; // measured in image editor
  this.x = Math.random() * -300 - this.width - this.shiftX;  // start before left boundary
  this.y = Math.random() * 170 + this.height;
  this.speed = Math.random() * 100 + 60; // min 20, max 119
  this.collided = false;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.collided) {
        // get enemy dizzy if collided
        this.x += Math.random() * this.speed - this.speed/2;
        this.y += Math.random() * this.speed - this.speed/2;
    }
    else {
        this.x += this.speed * dt;
        if(this.x >= maxX)
          this.init();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/char-cat-girl.png';
}
Player.prototype.init = function() {
  this.shiftX = 17; // measured in image editor
  this.shiftY = 61; // measured in image editor
  this.width = 68; // measured in image editor
  this.height = 78; // measured in image editor
  this.x = (maxX - this.width) / 3;
  this.y = maxY - this.height;
  this.step = this.width / 3;
  this.collided = false;
}

/*
** Get player dizzy if it collided, otherwise do nothing.
*/
Player.prototype.update = function(dt) {
  if(this.collided) {
      this.x += Math.random() * this.step - this.step/2;
      this.y += Math.random() * this.step - this.step/2;
  }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
        this.x -= this.step;
        break;
    case 'right':
        this.x += this.step;
        break;
    case 'up':
        this.y -= this.step;
        break;
    case 'down':
        this.y += this.step;
        break;
  }
  if(this.x > maxX - this.width)
      this.x = maxX - this.width;
  if(this.x < 0)
      this.x = 0;
  if(this.y > maxY - this.height)
      this.y = maxY - this.height;
  if(this.y < 0)
      this.y = 0;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
for(let ff=0; ff<5; ff++) {
  allEnemies.push(new Enemy());
}
const player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
