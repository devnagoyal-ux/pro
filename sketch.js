let leftScore; 
let rightScore;
var allDebris = [];

 
function setup() {
  createCanvas(windowWidth, windowHeight);
  leftShip = new Ship(windowWidth * 0.33);
  rightShip = new Ship(windowWidth * 0.66);
  for (let i = 0; i < 50; i++) {
    allDebris.push(new Debris());
  }
 
   
  // creating the score objects
  leftScore = new Score(windowWidth * 0.33 - 40);
  rightScore = new Score(windowWidth * 0.66 + 40);
 
}
 
function draw() {
  background(0);
   
  leftShip.update();
  rightShip.update();
   
  leftShip.display();
  rightShip.display();
   
  updateDebrisAndCheckCollisions();
   
   
  // pass in the players current score
  leftScore.display(leftShip.score);
  rightScore.display(rightShip.score);
   
}
 
 
// sexy function
function updateDebrisAndCheckCollisions() {
  for (let i = 0; i < allDebris.length; i++) {
    allDebris[i].update();
    allDebris[i].display();
     
    if (allDebris[i].hasHitShip(leftShip)) {
        leftShip.respawn();
    } else if (allDebris[i].hasHitShip(rightShip)) {
        rightShip.respawn();
    }
  }
}
 
 
function keyPressed() {
    if (keyCode == UP_ARROW || touches.length > 0) {
    rightShip.isUp = true;
    rightShip.isDown = false;
    touches = [];
  } else if (keyCode == DOWN_ARROW) {
    rightShip.isDown = true;
    rightShip.isUp = false;
  }
   
   
  if (keyCode == 87) {
    // keycode is 'w'
    leftShip.isUp = true;
    leftShip.isDown = false;
   touches = [];
  } else if (keyCode == 83) {
    // keycode is 's'
    leftShip.isDown = true;
    leftShip.isUp = false;
  }
}
 
 
function keyReleased() {
    if (keyCode == UP_ARROW || touches.length > 0) {
    rightShip.isUp = false;
    touches = [];
  } else if (keyCode == DOWN_ARROW) {
    rightShip.isDown = false;
  }
   
  if (keyCode == 87 || touches.length > 0) {
    leftShip.isUp = false;
    touches = [];
  } else if (keyCode == 83) {
    leftShip.isDown = false;
  }
}
